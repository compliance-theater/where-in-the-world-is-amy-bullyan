export type DistrictLane = "PLSAS" | "Hopkins";

export type ReleaseArtifact = {
  id: string;
  lane: DistrictLane;
  title: string;
  eyebrow: string;
  date: string;
  pages: number;
  radioactiveness: string;
  description: string;
  href: string;
  sourcePath: string;
};

export const releaseDescription =
  "Redacted, source-backed release packets tracking record integrity, receipt/routing proof, disclosure logs, and FERPA/MGDPA category-mapping access bases.";

export const releaseArtifacts: ReleaseArtifact[] = [
  {
    id: "administrator-packet",
    lane: "PLSAS",
    title: "Administrator of the Year Packet",
    eyebrow: "Branded release packet",
    date: "2026-06-23",
    pages: 62,
    radioactiveness: "9.6/10",
    description:
      "A release-ready redacted packet with callouts and no target PII leaks identified in the release readback.",
    href: "/release-assets/plsas/administrator-of-the-year.pdf",
    sourcePath:
      "report_output/administrator_of_the_year_2026-06-23/Administrator_of_the_Year.pdf"
  },
  {
    id: "plsas-full-autoack-01",
    lane: "PLSAS",
    title: "Full Auto-Ack Thread: HOMS / Title IX Process Collapse",
    eyebrow: "Receipt/routing proof",
    date: "2026-06-21",
    pages: 1,
    radioactiveness: "9.2/10",
    description:
      "Full redacted sent-notice and board auto-ack thread subset. Scores hot because it pairs the notice body with receipt/routing proof.",
    href: "/release-assets/plsas/plsas-autoack-thread-01-homs-titleix-process-collapse.pdf",
    sourcePath:
      "communications/evidence/plsas_full_autoack_threads_release_redacted_2026-06-23/plsas_autoack_thread_01_2026-06-21_homs-titleix-process-collapse_thread_19eedb1b137a73ca_autoack_19eedb1d7891cb31_native_REDACTED.pdf"
  },
  {
    id: "plsas-full-autoack-02",
    lane: "PLSAS",
    title: "Full Auto-Ack Thread: Catastrophic Record Integrity",
    eyebrow: "Receipt/routing proof",
    date: "2026-06-17",
    pages: 1,
    radioactiveness: "9.3/10",
    description:
      "Redacted sent-notice and auto-ack thread for a record-integrity governance notice.",
    href: "/release-assets/plsas/plsas-autoack-thread-02-catastrophic-record-integrity.pdf",
    sourcePath:
      "communications/evidence/plsas_full_autoack_threads_release_redacted_2026-06-23/plsas_autoack_thread_02_2026-06-17_catastrophic-record-integrity_thread_19ed7837b77954bb_autoack_19ed783964eda4d9_native_REDACTED.pdf"
  },
  {
    id: "plsas-full-autoack-03",
    lane: "PLSAS",
    title: "Full Auto-Ack Thread: FERPA Mapping Definitions",
    eyebrow: "Receipt/routing proof",
    date: "2026-06-18",
    pages: 1,
    radioactiveness: "8.9/10",
    description:
      "Redacted sent-notice and receipt trail for FERPA mapping and record-accuracy issues.",
    href: "/release-assets/plsas/plsas-autoack-thread-03-ferpa-mapping-definitions.pdf",
    sourcePath:
      "communications/evidence/plsas_full_autoack_threads_release_redacted_2026-06-23/plsas_autoack_thread_03_2026-06-18_ferpa-mapping-definitions_thread_19eda54ce3af9744_autoack_19eda54f90e7f471_native_REDACTED.pdf"
  },
  {
    id: "plsas-full-autoack-04",
    lane: "PLSAS",
    title: "Full Auto-Ack Thread: Contractor/Counsel Reliance",
    eyebrow: "Receipt/routing proof",
    date: "2026-06-20",
    pages: 1,
    radioactiveness: "8.8/10",
    description:
      "Redacted sent-notice and board auto-ack thread for contractor, counsel, FERPA, and disclosure-log reliance issues.",
    href: "/release-assets/plsas/plsas-autoack-thread-04-contractor-counsel-reliance.pdf",
    sourcePath:
      "communications/evidence/plsas_full_autoack_threads_release_redacted_2026-06-23/plsas_autoack_thread_04_2026-06-20_contractor-counsel-ferpa-disclosure-log-reliance_thread_19ee7250a2f04950_autoack_19ee72529eab373f_native_REDACTED.pdf"
  },
  {
    id: "plsas-full-autoack-05",
    lane: "PLSAS",
    title: "Full Auto-Ack Thread: June 11 Data Practices Response",
    eyebrow: "Receipt/routing proof",
    date: "2026-06-20",
    pages: 1,
    radioactiveness: "8.4/10",
    description:
      "Redacted sent-notice and board receipt thread for a June 11 data-practices records-response issue.",
    href: "/release-assets/plsas/plsas-autoack-thread-05-june11-data-practices-response.pdf",
    sourcePath:
      "communications/evidence/plsas_full_autoack_threads_release_redacted_2026-06-23/plsas_autoack_thread_05_2026-06-20_june11-data-practices-response_thread_19ee746a57c49ed9_autoack_19ee746cde9c377d_native_REDACTED.pdf"
  },
  {
    id: "good-faith-cure-thread",
    lane: "PLSAS",
    title: "Good-Faith Cure / Clarification Thread",
    eyebrow: "Clarification record",
    date: "2026-06-23",
    pages: 4,
    radioactiveness: "7.6/10",
    description:
      "Redacted thread preserving a cure-and-clarification exchange from the release set.",
    href: "/release-assets/plsas/good-faith-cure-thread-release-redacted.pdf",
    sourcePath:
      "communications/evidence/good_faith_cure_thread_release_redacted_2026-06-23/1868281484107529347_RELEASE_REDACTED.pdf"
  },
  {
    id: "nothing-to-see-here",
    lane: "PLSAS",
    title: "Nothing To See Here",
    eyebrow: "Emily bundle",
    date: "2026-06-23",
    pages: 9,
    radioactiveness: "9.1/10",
    description:
      "A redacted bundle selected from the release lane, with no target PII leaks identified in the release readback.",
    href: "/release-assets/plsas/nothing-to-see-here.pdf",
    sourcePath:
      "communications/evidence/nothing_to_see_here_2026-06-23/nothing_to_see_here.pdf"
  },
  {
    id: "homs-investigation-reports-redacted-packet",
    lane: "PLSAS",
    title: "HOMS Investigation Reports Redacted Packet",
    eyebrow: "Primary investigation records",
    date: "2026-06-22",
    pages: 6,
    radioactiveness: "9.0/10",
    description:
      "Release-safe redacted investigation-report packet with document-level indexes identifying private-data redactions.",
    href: "/release-assets/plsas/homs-investigation-reports-redacted-shareable-packet.pdf",
    sourcePath:
      "report_output/homs_investigation_reports_redacted_packet_2026-06-22/HOMS_Investigation_Reports_Redacted_Shareable_Packet.pdf"
  },
  {
    id: "governance-catastrophic-record-integrity",
    lane: "PLSAS",
    title: "Governance Notice: Catastrophic Record Integrity Failure",
    eyebrow: "Selected governance notice",
    date: "2026-06-17",
    pages: 3,
    radioactiveness: "9.4/10",
    description:
      "Release-redacted board governance notice regarding submitted correction requests and fork-supported inaccuracies.",
    href: "/release-assets/plsas/governance-catastrophic-record-integrity.pdf",
    sourcePath:
      "communications/evidence/plsas_governance_notices_release_redacted_2026-06-23/2026-06-17-isd719-catastrophic-record-integrity-failure_RELEASE_REDACTED.pdf"
  },
  {
    id: "governance-ferpa-mapping-scope",
    lane: "PLSAS",
    title: "Governance Notice: FERPA Mapping Scope",
    eyebrow: "Selected governance notice",
    date: "2026-06-18",
    pages: 4,
    radioactiveness: "8.8/10",
    description:
      "Release-redacted notice focused on FERPA/MGDPA category mapping and record-universe scope.",
    href: "/release-assets/plsas/governance-ferpa-mapping-scope.pdf",
    sourcePath:
      "communications/evidence/plsas_governance_notices_release_redacted_2026-06-23/2026-06-18-isd719-board-governance-ferpa-mapping-scope-notice_RELEASE_REDACTED.pdf"
  },
  {
    id: "governance-contractor-counsel",
    lane: "PLSAS",
    title: "Governance Notice: Contractor/Counsel Disclosure-Log Reliance",
    eyebrow: "Selected governance notice",
    date: "2026-06-20",
    pages: 5,
    radioactiveness: "8.9/10",
    description:
      "Release-redacted notice addressing contractor/counsel access basis, disclosure logs, and reliance records.",
    href: "/release-assets/plsas/governance-contractor-counsel-reliance.pdf",
    sourcePath:
      "communications/evidence/plsas_governance_notices_release_redacted_2026-06-23/2026-06-20-isd719-board-governance-contractor-disclosure-log-reliance-notice_RELEASE_REDACTED.pdf"
  },
  {
    id: "governance-robert-cothern",
    lane: "PLSAS",
    title: "Governance Notice: Robert Cothern",
    eyebrow: "Selected governance notice",
    date: "2026-06-20",
    pages: 5,
    radioactiveness: "8.3/10",
    description:
      "Release-redacted governance notice in the selected PLSAS release derivative set.",
    href: "/release-assets/plsas/governance-robert-cothern.pdf",
    sourcePath:
      "communications/evidence/plsas_governance_notices_release_redacted_2026-06-23/2026-06-20-isd719-robert-cothern-governance-notice_RELEASE_REDACTED.pdf"
  },
  {
    id: "governance-homs-titleix-collapse",
    lane: "PLSAS",
    title: "Governance Notice: HOMS / Title IX Source-Record Failure",
    eyebrow: "Selected governance notice",
    date: "2026-06-21",
    pages: 10,
    radioactiveness: "9.5/10",
    description:
      "Release-redacted governance notice concerning HOMS / Title IX source-record, finality, and routing issues.",
    href: "/release-assets/plsas/governance-homs-titleix-source-record.pdf",
    sourcePath:
      "communications/evidence/plsas_governance_notices_release_redacted_2026-06-23/2026-06-21-isd719-board-governance-homs-titleix-source-record-coverup-notice_RELEASE_REDACTED.pdf"
  },
  {
    id: "hmr-request-redacted",
    lane: "Hopkins",
    title: "HMR Request-Only Redacted Packet",
    eyebrow: "Request packet",
    date: "2026-06-22",
    pages: 6,
    radioactiveness: "9.3/10",
    description:
      "Request-only redacted packet identified as release-ready with no target PII leaks in the readback.",
    href: "/release-assets/hopkins/hmr-request-redacted-shareable.pdf",
    sourcePath:
      "communications/evidence/hopkins_child_safety_hmr_rr001_redacted_request_2026-06-22/2026-06-04-isd719-homs-maltreatment-policy414-correction_REQUEST_REDACTED_SHAREABLE.pdf"
  },
  {
    id: "hmr-combined-redacted",
    lane: "Hopkins",
    title: "HMR Combined Redacted Packet",
    eyebrow: "Combined request and exhibits",
    date: "2026-06-22",
    pages: 46,
    radioactiveness: "9.0/10",
    description:
      "Combined redacted packet with request and supporting materials from the release-safe HMR set.",
    href: "/release-assets/hopkins/hmr-combined-redacted-shareable.pdf",
    sourcePath:
      "communications/evidence/hopkins_child_safety_hmr_rr001_redacted_combined_packet_2026-06-22/2026-06-04-isd719-homs-maltreatment-policy414-correction-packet_REDACTED_SHAREABLE.pdf"
  },
  {
    id: "hopkins-native-send-01",
    lane: "Hopkins",
    title: "Native Send: Child-Safety Maltreatment Routing",
    eyebrow: "Native render derivative",
    date: "2026-06-04",
    pages: 1,
    radioactiveness: "8.5/10",
    description:
      "Redacted native-render derivative preserving proof of send and routing context.",
    href: "/release-assets/hopkins/native-send-01-child-safety-maltreatment-routing.pdf",
    sourcePath:
      "communications/evidence/native_renders_release_redacted_2026-06-23/hopkins_send_01_2026-06-04_child-safety-maltreatment-routing_thread_19e9296374ad2d7c_msg_19e92972b36ab466_native_REDACTED.pdf"
  },
  {
    id: "hopkins-native-send-02",
    lane: "Hopkins",
    title: "Native Send: Final Information Packet",
    eyebrow: "Native render derivative",
    date: "2026-06-15",
    pages: 1,
    radioactiveness: "7.8/10",
    description:
      "Redacted native-render derivative for the final information packet send.",
    href: "/release-assets/hopkins/native-send-02-final-information-packet.pdf",
    sourcePath:
      "communications/evidence/native_renders_release_redacted_2026-06-23/hopkins_send_02_2026-06-15_final-information-packet_thread_19ecce5c875830a7_msg_19ecce5c875830a7_native_REDACTED.pdf"
  },
  {
    id: "hopkins-native-send-03",
    lane: "Hopkins",
    title: "Native Send: Supplemental Governance Notice",
    eyebrow: "Native render derivative",
    date: "2026-05-29",
    pages: 1,
    radioactiveness: "8.2/10",
    description:
      "Redacted native-render derivative for supplemental governance-notice transmittal proof.",
    href: "/release-assets/hopkins/native-send-03-supplemental-governance-notice.pdf",
    sourcePath:
      "communications/evidence/native_renders_release_redacted_2026-06-23/hopkins_send_03_2026-05-29_supplemental-governance-notice_thread_19e72314f657abfc_msg_19e7236b2820bb33_native_REDACTED.pdf"
  },
  {
    id: "hopkins-native-send-04",
    lane: "Hopkins",
    title: "Native Send: Formal Investigations Notice",
    eyebrow: "Native render derivative",
    date: "2026-05-12",
    pages: 3,
    radioactiveness: "8.0/10",
    description:
      "Redacted native-render derivative for the formal investigations notice send.",
    href: "/release-assets/hopkins/native-send-04-formal-investigations-notice.pdf",
    sourcePath:
      "communications/evidence/native_renders_release_redacted_2026-06-23/hopkins_send_04_2026-05-12_formal-investigations-notice_thread_19e1ada6a6aa9425_msgs_19e1ae41f76142cd_19e1ae5fe3883fb5_native_REDACTED.pdf"
  }
];

export function artifactsForLane(lane: DistrictLane) {
  return releaseArtifacts.filter((artifact) => artifact.lane === lane);
}

export const featuredArtifacts = [
  releaseArtifacts.find((artifact) => artifact.id === "administrator-packet"),
  releaseArtifacts.find((artifact) => artifact.id === "hmr-request-redacted"),
  releaseArtifacts.find((artifact) => artifact.id === "governance-ferpa-mapping-scope")
].filter(Boolean) as ReleaseArtifact[];
