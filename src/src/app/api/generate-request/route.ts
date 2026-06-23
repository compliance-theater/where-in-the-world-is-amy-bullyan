import { NextRequest } from "next/server";
import { buildCategoryMappingRequestPdf, buildCorrectionRequestPdf, type RequestPayload } from "@/lib/requestPdf";

export async function POST(request: NextRequest) {
  const body = (await request.json()) as RequestPayload;
  const payload: Required<RequestPayload> = {
    requestType: body.requestType === "correction" ? "correction" : "mapping",
    parentName: body.parentName || "Parent / Guardian",
    childName: body.childName || "Student",
    districtName: body.districtName || "School District",
    districtContact: body.districtContact || "",
    recordLocators:
      body.recordLocators ||
      "Record families, systems, dates, staff names, complaint numbers, or production folders to be mapped.",
    dateRange: body.dateRange || "",
    concernSummary: body.concernSummary || "",
    deliveryEmail: body.deliveryEmail || "",
    accessorName: body.accessorName || "",
    accessorRole: body.accessorRole || "",
    victimAcknowledgement: Boolean(body.victimAcknowledgement)
  };
  const isCorrection = payload.requestType === "correction";
  const pdf = isCorrection ? await buildCorrectionRequestPdf(payload) : await buildCategoryMappingRequestPdf(payload);
  return new Response(pdf, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${isCorrection ? "ferpa-record-correction-request.pdf" : "ferpa-category-mapping-request.pdf"}"`,
      "X-Request-Builder-Format": "compliance-theater-cover-body"
    }
  });
}
