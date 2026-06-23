export type ReleaseItem = {
  title: string;
  href: string;
  district: "PLSAS" | "Hopkins";
  tag: string;
  score: string;
  description: string;
};

export const releaseItems: ReleaseItem[] = [
  {
    title: "Administrator of the Year",
    href: "/release/plsas/administrator-of-the-year.pdf",
    district: "PLSAS",
    tag: "Accountability packet",
    score: "8.5/10",
    description: "Training, correction, and response records tied to the district's own words."
  },
  {
    title: "Nothing To See Here",
    href: "/release/plsas/nothing-to-see-here.pdf",
    district: "PLSAS",
    tag: "Emily Herman bundle",
    score: "8.5/10",
    description: "The record is accurate, all responsive data was provided, the complaint was dismissed."
  },
  {
    title: "Good-Faith Cure Thread",
    href: "/release/plsas/good-faith-cure-thread.pdf",
    district: "PLSAS",
    tag: "Board notice thread",
    score: "8/10",
    description: "A cure opportunity, an auto-ack, and continued silence."
  },
  {
    title: "Catastrophic Record Integrity Failure",
    href: "/release/plsas/2026-06-17-isd719-catastrophic-record-integrity-failure_RELEASE_REDACTED.pdf",
    district: "PLSAS",
    tag: "Governance notice",
    score: "8.5/10",
    description: "A short governance notice on fork-supported record integrity failures."
  },
  {
    title: "FERPA Mapping Definitions",
    href: "/release/plsas/2026-06-18-isd719-board-governance-ferpa-mapping-scope-notice_RELEASE_REDACTED.pdf",
    district: "PLSAS",
    tag: "Governance notice",
    score: "8.5/10",
    description: "Who saw the records, under what category, and where is the maintained basis?"
  },
  {
    title: "Contractor/Counsel Disclosure Log Reliance",
    href: "/release/plsas/2026-06-20-isd719-board-governance-contractor-disclosure-log-reliance-notice_RELEASE_REDACTED.pdf",
    district: "PLSAS",
    tag: "Governance notice",
    score: "8.5/10",
    description: "Access mapping, disclosure logs, and records that should not be treated as clean until mapped."
  },
  {
    title: "Robert Cothern June 11 Records Response",
    href: "/release/plsas/2026-06-20-isd719-robert-cothern-governance-notice_RELEASE_REDACTED.pdf",
    district: "PLSAS",
    tag: "Governance notice",
    score: "8.5/10",
    description: "A current response-role accountability notice, not a retelling of the whole case."
  },
  {
    title: "HOMS / Title IX Process Collapse",
    href: "/release/plsas/2026-06-21-isd719-board-governance-homs-titleix-source-record-coverup-notice_RELEASE_REDACTED.pdf",
    district: "PLSAS",
    tag: "Governance notice",
    score: "8.5/10",
    description: "Process labels, unsupported finality, and a board-level humane-response problem."
  },
  {
    title: "Board Auto-Ack Threads",
    href: "/release/plsas/plsas_autoack_thread_02_2026-06-17_catastrophic-record-integrity_thread_19ed7837b77954bb_autoack_19ed783964eda4d9_native_REDACTED.pdf",
    district: "PLSAS",
    tag: "Receipt proof",
    score: "8.5/10",
    description: "Proof the board route received the notices."
  },
  {
    title: "HOMS Maltreatment Correction Request",
    href: "/release/hopkins/homs-maltreatment-correction-request.pdf",
    district: "Hopkins",
    tag: "Correction request",
    score: "9/10",
    description: "A tight release-safe correction request tied to child-safety and maltreatment routing."
  },
  {
    title: "HOMS Maltreatment Combined Packet",
    href: "/release/hopkins/homs-maltreatment-correction-combined.pdf",
    district: "Hopkins",
    tag: "Correction packet",
    score: "8.5/10",
    description: "The same lane with supporting context and receipts."
  }
];

export function releasesFor(district: "PLSAS" | "Hopkins") {
  return releaseItems.filter((item) => item.district === district);
}
