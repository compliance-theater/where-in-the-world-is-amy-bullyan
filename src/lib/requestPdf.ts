import { readFile } from "node:fs/promises";
import path from "node:path";
import { PDFDocument, PDFName, PDFString, StandardFonts, rgb } from "pdf-lib";

export type RequestPayload = {
  requestType?: "mapping" | "correction";
  parentName?: string;
  childName?: string;
  districtName?: string;
  districtContact?: string;
  recordLocators?: string;
  dateRange?: string;
  concernSummary?: string;
  deliveryEmail?: string;
  accessorName?: string;
  accessorRole?: string;
  victimAcknowledgement?: boolean;
};

type SectionType = "h1" | "h2" | "p" | "bullet";

type RequestSection = {
  type: SectionType;
  value: string;
};

type RequestPacketSpec = {
  title: string;
  subtitle: string;
  senderName: string;
  senderEmail: string;
  recipient: string;
  submitted: Date;
  deadline: Date;
  deadlineLabel: string;
  coverDisclaimer: string;
  body: RequestSection[];
};

const PAGE = { width: 612, height: 792 };
const MARGIN = 52;
const INK = rgb(0.075, 0.188, 0.337);
const CYAN = rgb(0, 0.686, 0.843);
const PINK = rgb(0.937, 0.247, 0.616);
const LIGHT = rgb(0.933, 0.973, 0.984);
const LINE = rgb(0.843, 0.886, 0.929);
const MUTED = rgb(0.345, 0.404, 0.49);
const LICENSE_URL = "https://github.com/compliance-theater/compliance-theater/blob/main/LICENSE.md";

function displayDate(date: Date) {
  return date.toLocaleDateString("en-US", { timeZone: "UTC", year: "numeric", month: "long", day: "numeric" });
}

function addBusinessDays(start: Date, days: number) {
  const current = new Date(start);
  let remaining = days;
  while (remaining > 0) {
    current.setUTCDate(current.getUTCDate() + 1);
    const day = current.getUTCDay();
    if (day !== 0 && day !== 6) remaining -= 1;
  }
  return current;
}

function normalizeText(value: string) {
  return value.replace(/[^\x09\x0a\x0d\x20-\x7e]/g, "'");
}

function wrapText(value: string, maxWidth: number, size: number, font: { widthOfTextAtSize(text: string, size: number): number }) {
  const words = normalizeText(value).replace(/\s+/g, " ").trim().split(" ").filter(Boolean);
  const lines: string[] = [];
  let line = "";
  for (const word of words) {
    const next = `${line} ${word}`.trim();
    if (line && font.widthOfTextAtSize(next, size) > maxWidth) {
      lines.push(line);
      line = word;
    } else {
      line = next;
    }
  }
  if (line) lines.push(line);
  return lines.length ? lines : [""];
}

function addLink(page: Parameters<PDFDocument["addPage"]>[0] extends never ? never : ReturnType<PDFDocument["addPage"]>, doc: PDFDocument, rect: [number, number, number, number], uri: string) {
  const annotation = doc.context.obj({
    Type: "Annot",
    Subtype: "Link",
    Rect: rect,
    Border: [0, 0, 0],
    A: { Type: "Action", S: "URI", URI: PDFString.of(uri) }
  });
  const annotationRef = doc.context.register(annotation);
  page.node.set(PDFName.of("Annots"), doc.context.obj([annotationRef]));
}

async function logoBytes() {
  return readFile(path.join(process.cwd(), "public", "assets", "request-builder-logo-light.png"));
}

function drawWrappedText(
  page: ReturnType<PDFDocument["addPage"]>,
  value: string,
  x: number,
  y: number,
  maxWidth: number,
  size: number,
  font: Awaited<ReturnType<PDFDocument["embedFont"]>>,
  options: { leading?: number; color?: ReturnType<typeof rgb> } = {}
) {
  const leading = options.leading ?? size * 1.35;
  const lines = wrapText(value, maxWidth, size, font);
  lines.forEach((line, index) => {
    page.drawText(line, { x, y: y - index * leading, size, font, color: options.color ?? INK });
  });
  return y - lines.length * leading;
}

function drawWrappedLines(
  page: ReturnType<PDFDocument["addPage"]>,
  value: string,
  x: number,
  y: number,
  maxWidth: number,
  size: number,
  font: Awaited<ReturnType<PDFDocument["embedFont"]>>,
  options: { leading?: number; color?: ReturnType<typeof rgb>; maxLines?: number } = {}
) {
  const leading = options.leading ?? size * 1.35;
  const lines = value
    .split(/\r?\n/)
    .flatMap((line) => wrapText(line, maxWidth, size, font))
    .slice(0, options.maxLines);
  lines.forEach((line, index) => {
    page.drawText(line, { x, y: y - index * leading, size, font, color: options.color ?? INK });
  });
  return y - lines.length * leading;
}

function drawFooter(doc: PDFDocument, page: ReturnType<PDFDocument["addPage"]>, pageNumber: number, fonts: { regular: Awaited<ReturnType<PDFDocument["embedFont"]>> }) {
  page.drawLine({ start: { x: MARGIN, y: 40 }, end: { x: PAGE.width - MARGIN, y: 40 }, thickness: 0.5, color: LINE });
  page.drawText("Educational Justice License v1.0", { x: MARGIN, y: 26, size: 7.5, font: fonts.regular, color: MUTED });
  page.drawText(`Page ${pageNumber}`, { x: PAGE.width - MARGIN - 25, y: 26, size: 7.5, font: fonts.regular, color: MUTED });
  addLink(page, doc, [MARGIN, 22, MARGIN + 110, 34], LICENSE_URL);
}

function drawMetadataTable(
  page: ReturnType<PDFDocument["addPage"]>,
  rows: Array<[string, string]>,
  y: number,
  fonts: { regular: Awaited<ReturnType<PDFDocument["embedFont"]>>; bold: Awaited<ReturnType<PDFDocument["embedFont"]>> }
) {
  const tableX = 72;
  const tableWidth = 468;
  const labelWidth = 126;
  const rowHeight = 34;
  rows.forEach(([label, value], index) => {
    const rowY = y - index * rowHeight;
    page.drawRectangle({ x: tableX, y: rowY - rowHeight + 7, width: tableWidth, height: rowHeight, color: LIGHT, borderColor: LINE, borderWidth: 0.6 });
    page.drawLine({ start: { x: tableX + labelWidth, y: rowY - rowHeight + 7 }, end: { x: tableX + labelWidth, y: rowY + 7 }, thickness: 0.4, color: LINE });
    page.drawText(label, { x: tableX + 10, y: rowY - 12, size: 8.2, font: fonts.bold, color: INK });
    drawWrappedLines(page, value, tableX + labelWidth + 10, rowY - 12, tableWidth - labelWidth - 20, 8.4, fonts.regular, {
      leading: 10.5,
      color: INK,
      maxLines: 2
    });
  });
  return y - rows.length * rowHeight;
}

async function renderRequestPacket(spec: RequestPacketSpec) {
  const doc = await PDFDocument.create();
  const fonts = {
    regular: await doc.embedFont(StandardFonts.Helvetica),
    bold: await doc.embedFont(StandardFonts.HelveticaBold)
  };
  const logo = await doc.embedPng(await logoBytes());
  const logoWidth = 169.2;
  const logoHeight = (logo.height / logo.width) * logoWidth;

  const cover = doc.addPage([PAGE.width, PAGE.height]);
  cover.drawImage(logo, { x: (PAGE.width - logoWidth) / 2, y: 544, width: logoWidth, height: logoHeight });
  let titleSize = 29;
  while (titleSize > 20 && fonts.bold.widthOfTextAtSize(spec.title, titleSize) > PAGE.width - MARGIN * 2) {
    titleSize -= 0.5;
  }
  const titleWidth = fonts.bold.widthOfTextAtSize(spec.title, titleSize);
  cover.drawText(spec.title, { x: Math.max(MARGIN, (PAGE.width - titleWidth) / 2), y: 489, size: titleSize, font: fonts.bold, color: INK });
  const subtitleLines = wrapText(spec.subtitle, 400, 11.5, fonts.regular);
  subtitleLines.forEach((line, index) => {
    const width = fonts.regular.widthOfTextAtSize(line, 11.5);
    cover.drawText(line, { x: (PAGE.width - width) / 2, y: 463 - index * 14, size: 11.5, font: fonts.regular, color: MUTED });
  });

  const rows: Array<[string, string]> = [
    ["Date submitted", displayDate(spec.submitted)],
    ["Response violation date", displayDate(spec.deadline)],
    ["Deadline basis", spec.deadlineLabel],
    ["Sender", `${spec.senderName}${spec.senderEmail ? `\n${spec.senderEmail}` : ""}`],
    ["Recipient", spec.recipient],
    ["Scope", spec.subtitle]
  ];
  const afterTableY = drawMetadataTable(cover, rows, 392, fonts);
  let coverNoteY = afterTableY - 28;
  coverNoteY = drawWrappedText(
    cover,
    "This cover page is an index aid. The formal request body follows on the next page and controls the specific scope, authorities invoked, and requested action.",
    72,
    coverNoteY,
    468,
    7.8,
    fonts.regular,
    { leading: 10.2, color: MUTED }
  );
  drawWrappedText(cover, spec.coverDisclaimer, 72, coverNoteY - 14, 468, 7.8, fonts.regular, { leading: 10.2, color: MUTED });
  drawFooter(doc, cover, 1, fonts);

  let page = doc.addPage([PAGE.width, PAGE.height]);
  let pageNumber = 2;
  let y = 724;

  function nextPage() {
    drawFooter(doc, page, pageNumber, fonts);
    pageNumber += 1;
    page = doc.addPage([PAGE.width, PAGE.height]);
    y = 724;
  }

  for (const section of spec.body) {
    const isH1 = section.type === "h1";
    const isH2 = section.type === "h2";
    const isBullet = section.type === "bullet";
    const font = isH1 || isH2 ? fonts.bold : fonts.regular;
    const size = isH1 ? 16 : isH2 ? 11.2 : 10.2;
    const leading = isH1 ? 19 : isH2 ? 14 : 13.5;
    const x = isBullet ? MARGIN + 14 : MARGIN;
    const maxWidth = PAGE.width - MARGIN * 2 - (isBullet ? 14 : 0);
    const textValue = isBullet ? `- ${section.value}` : section.value;
    const lines = wrapText(textValue, maxWidth, size, font);
    const needed = lines.length * leading + (isH1 || isH2 ? 10 : 7);
    if (y - needed < 58) nextPage();
    if (isH1 || isH2) y -= 4;
    lines.forEach((line, index) => {
      page.drawText(line, { x, y: y - index * leading, size, font, color: INK });
    });
    y -= lines.length * leading + (isH1 || isH2 ? 10 : 7);
  }
  drawFooter(doc, page, pageNumber, fonts);

  return Buffer.from(await doc.save());
}

function categoryMappingSpec(payload: Required<RequestPayload>): RequestPacketSpec {
  const submitted = new Date();
  const deadline = addBusinessDays(submitted, 10);
  const recipient = payload.districtContact || "Responsible Authority / Data Practices Compliance Official";
  const subtitle = `FERPA/MGDPA category mapping for ${payload.childName} education records`;
  return {
    title: "FERPA / MGDPA Category-Mapping Request",
    subtitle,
    senderName: payload.parentName,
    senderEmail: payload.deliveryEmail,
    recipient,
    submitted,
    deadline,
    deadlineLabel: "MGDPA data-subject access deadline: 10 business days; FERPA outer access deadline: 45 calendar days",
    coverDisclaimer:
      "This tool generates a request template, not legal advice. Families should adapt the request to their facts, local law, and any court, custody, privacy, or student-safety limits that apply.",
    body: ([
      { type: "h1", value: "FERPA / MGDPA Category-Mapping Data Request" },
      { type: "p", value: `Date: ${displayDate(submitted)}` },
      { type: "p", value: `Dear ${recipient}:` },
      {
        type: "p",
        value:
          "This is a formal data access request under the Minnesota Government Data Practices Act, Minnesota Statutes chapter 13, including section 13.04, subdivision 3. To the extent the requested records are education records, this request also invokes FERPA, 20 U.S.C. section 1232g and 34 CFR part 99."
      },
      {
        type: "p",
        value:
          "This transmission and its attachments contain private data about me and my minor child, including private education data and personally identifiable information from education records. I do not consent to the sharing, forwarding, review, consultation, disclosure, or use of this data with or by any person or entity that is not category-mapped to a valid District-published, District-maintained FERPA exception applicable to the relevant school year and record universe."
      },
      {
        type: "p",
        value:
          "If the District discloses or permits access without consent, please preserve and identify the maintained basis for that access, including the recipient, role, purpose, record category, applicable FERPA/MGDPA authority, annual-notice category, category mapping, legitimate educational interest, and any direct-control or redisclosure limitation relied upon."
      },
      { type: "p", value: `I am the parent or guardian of the minor data subject/student, ${payload.childName}.` },
      {
        type: "p",
        value:
          "Please produce existing records and maintained data showing each person, official, employee, contractor, consultant, attorney, vendor, investigator, claims administrator, board reviewer, or other entity that accessed, received, reviewed, used, forwarded, or was given access to education records or private data concerning the student."
      },
      { type: "h2", value: "Requested Category Mapping" },
      {
        type: "p",
        value:
          "For each person or entity, please identify the record category, date or date range, purpose, role, FERPA/MGDPA access basis, annual-notice category, legitimate educational interest, direct-control term, redisclosure limitation, and maintained source record supporting the claimed access basis."
      },
      { type: "h2", value: "Record Locators / Categories" },
      { type: "p", value: payload.recordLocators },
      { type: "h2", value: "Date Range" },
      { type: "p", value: payload.dateRange || "All dates reasonably connected to the records, events, or systems identified above." },
      { type: "h2", value: "Requested Existing Records" },
      { type: "bullet", value: "Access logs, disclosure logs, audit logs, routing records, forwarding records, review notes, assignment records, and recipient-mapping records." },
      { type: "bullet", value: "Annual FERPA notice language, school-official definitions, legitimate-educational-interest definitions, contract/direct-control terms, and redisclosure limits relied upon." },
      { type: "bullet", value: "Any no-records, withheld, privileged, civil-investigative, attorney-client, work-product, duplicate, or already-provided disposition for each request category." },
      { type: "bullet", value: "Records showing whether any person or entity accessed the data without a maintained FERPA/MGDPA category mapping." },
      {
        type: "p",
        value:
          "This request seeks existing government data, including existing stored records, entries, metadata, and fields, in the form or program in which the District maintains them. It does not request a newly authored narrative, calculation, analysis, conclusion, custom categorization, or custom report."
      },
      {
        type: "p",
        value:
          "If any data is withheld or redacted, please identify the withheld/redacted item, the responsible custodian if known, and the specific statutory section, temporary classification, or specific provision of federal law relied on. Please certify any denial in writing upon denial of access."
      },
      { type: "h2", value: "Concern Summary" },
      {
        type: "p",
        value:
          payload.concernSummary ||
          "The requester is seeking a record-specific accounting of who saw the student's records and the lawful basis claimed for that access."
      },
      {
        type: "p",
        value: `Please produce records electronically${payload.deliveryEmail ? ` to ${payload.deliveryEmail}` : " using the lawful district response channel"}. If any fee will be charged for copies, please provide an itemized estimate before incurring the cost.`
      },
      {
        type: "p",
        value: `Under Minnesota Statutes section 13.04, subdivision 3, the MGDPA response is due immediately if possible, or no later than ${displayDate(deadline)}. FERPA also requires access within a reasonable period and no later than 45 calendar days where applicable.`
      },
      { type: "p", value: "Sincerely," },
      { type: "p", value: payload.parentName },
      { type: "p", value: payload.deliveryEmail }
    ] as RequestSection[]).filter((section) => section.value)
  };
}

export async function buildCategoryMappingRequestPdf(payload: Required<RequestPayload>) {
  return renderRequestPacket(categoryMappingSpec(payload));
}

function correctionDeadline(start: Date) {
  const current = new Date(start);
  current.setUTCDate(current.getUTCDate() + 30);
  return current;
}

function correctionSpec(payload: Required<RequestPayload>): RequestPacketSpec {
  const submitted = new Date();
  const deadline = correctionDeadline(submitted);
  const recipient = payload.districtContact || "Responsible Authority / Data Practices Compliance Official";
  const subtitle = `Correction request for access-basis records concerning ${payload.childName}`;
  const accessor = payload.accessorName || "the identified recipient";
  const role = payload.accessorRole || "identified role";
  const victimAcknowledgement = `${accessor} did not have the right to access the victim's private data. ${accessor} (${role}) has seen more of this record than the victim.`;
  const cureBullets: RequestSection[] = [
    {
      type: "bullet",
      value:
        "Correct, alter, remove, destroy, or append a statement of disagreement to any maintained record that represents the access as authorized without a maintained FERPA/MGDPA category mapping."
    },
    {
      type: "bullet",
      value:
        "Identify and preserve the recipient, role, purpose, record category, access date, claimed authority, annual-notice category, legitimate educational interest, direct-control term, redisclosure limitation, and source record for the access."
    },
    {
      type: "bullet",
      value:
        "Notify prior recipients of any correction, amendment, statement of disagreement, or access-basis correction required by law or district policy."
    }
  ];
  if (payload.victimAcknowledgement) {
    cureBullets.push({
      type: "bullet",
      value: `Add a victim acknowledgement statement to the student's maintained record stating: "${victimAcknowledgement}"`
    });
  }

  return {
    title: "FERPA / MGDPA Record Correction Request",
    subtitle,
    senderName: payload.parentName,
    senderEmail: payload.deliveryEmail,
    recipient,
    submitted,
    deadline,
    deadlineLabel: "MGDPA correction determination deadline: 30 calendar days; FERPA amendment process where applicable",
    coverDisclaimer:
      "This tool generates a request template, not legal advice. Families should adapt the request to their facts, local law, and any court, custody, privacy, or student-safety limits that apply.",
    body: ([
      { type: "h1", value: "FERPA / MGDPA Record Correction Request" },
      { type: "p", value: `Date: ${displayDate(submitted)}` },
      { type: "p", value: `Dear ${recipient}:` },
      {
        type: "p",
        value:
          "This is a formal written challenge to the accuracy and completeness of maintained government data under Minnesota Statutes section 13.04, subdivision 4. To the extent the challenged records are education records, this also invokes FERPA amendment rights under 34 CFR 99.20."
      },
      {
        type: "p",
        value:
          "This transmission and its attachments contain private data about me and my minor child, including private education data and personally identifiable information from education records. I do not consent to the sharing, forwarding, review, consultation, disclosure, or use of this data with or by any person or entity that is not category-mapped to a valid District-published, District-maintained FERPA exception applicable to the relevant school year and record universe."
      },
      { type: "p", value: `I am the parent or guardian of the minor data subject/student, ${payload.childName}.` },
      { type: "h2", value: "Challenged Record Universe" },
      { type: "p", value: payload.recordLocators },
      { type: "h2", value: "Date Range" },
      { type: "p", value: payload.dateRange || "All dates reasonably connected to the records, events, or systems identified above." },
      { type: "h2", value: "Basis For Challenge" },
      {
        type: "p",
        value:
          payload.concernSummary ||
          "The maintained record universe appears inaccurate or incomplete because it does not identify a valid maintained access basis for the person or entity that accessed the student's private education data."
      },
      { type: "p", value: `Identified access concern: ${accessor}${payload.accessorRole ? ` (${payload.accessorRole})` : ""}.` },
      { type: "h2", value: "Requested Correction / Cure" },
      ...cureBullets,
      {
        type: "p",
        value:
          "If the District determines the challenged data are accurate and complete as maintained, please issue the required written determination, preserve the disputed data, identify the evidence relied upon, and provide any FERPA hearing rights or state-law review rights that apply."
      },
      {
        type: "p",
        value: `Under Minnesota Statutes section 13.04, subdivision 4, the correction determination is due no later than ${displayDate(deadline)}.`
      },
      { type: "p", value: "Sincerely," },
      { type: "p", value: payload.parentName },
      { type: "p", value: payload.deliveryEmail }
    ] as RequestSection[]).filter((section) => section.value)
  };
}

export async function buildCorrectionRequestPdf(payload: Required<RequestPayload>) {
  return renderRequestPacket(correctionSpec(payload));
}
