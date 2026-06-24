import type { Metadata } from "next";
import { ArtifactList } from "@/components/ArtifactList";
import { LaneHero } from "@/components/LaneHero";
import { ReleaseStats } from "@/components/ReleaseStats";
import { StartHere } from "@/components/StartHere";
import { artifactsForLane } from "@/lib/releaseArtifacts";

export const metadata: Metadata = {
  title: "PLSAS Releases",
  description:
    "PLSAS board emails, investigation records, and governance notices on maltreatment reporting, Title IX posture, and student-record access."
};

const orderedPlsasIds = [
  "plsas-full-autoack-01",
  "governance-homs-titleix-collapse",
  "plsas-full-autoack-02",
  "governance-catastrophic-record-integrity",
  "plsas-full-autoack-03",
  "governance-ferpa-mapping-scope",
  "plsas-full-autoack-04",
  "governance-contractor-counsel",
  "plsas-full-autoack-05",
  "governance-robert-cothern",
  "good-faith-cure-thread",
  "pending-request-compendium-2026-06-23",
  "active-elapsed-status-guide-2026-06-23",
  "administrator-packet",
  "homs-investigation-reports-redacted-packet",
  "nothing-to-see-here",
  "daily-status-tracker-combined-2026-06-23"
];

function orderPlsasArtifacts() {
  const artifacts = artifactsForLane("PLSAS");
  const byId = new Map(artifacts.map((artifact) => [artifact.id, artifact]));
  const ordered = orderedPlsasIds
    .map((id) => byId.get(id))
    .filter((artifact): artifact is NonNullable<typeof artifact> => Boolean(artifact));
  const orderedIds = new Set(ordered.map((artifact) => artifact.id));
  return [...ordered, ...artifacts.filter((artifact) => !orderedIds.has(artifact.id))];
}

export default function PlsasPage() {
  const artifacts = orderPlsasArtifacts();
  return (
    <main>
      <LaneHero title="PLSAS Releases" kicker="PLSAS" recordHrefs={artifacts.map((artifact) => artifact.href)} />
      <section className="page-shell lane-body">
        <div className="page-heading lane-summary">
          <p>
            Suspected suppression of maltreatment reporting, bad-faith Title IX investigative posture, and suspected
            record access and classification violations.
          </p>
          <p className="redaction-note">
            Some private identifying information has been redacted. Our redactions appear in red and are indexed inside
            each document. Any other redactions shown are part of the record as it was provided.
          </p>
          <p>Redacted materials only. Native originals stay off the public table.</p>
        </div>
        <StartHere
          artifacts={artifacts}
          ids={[
            "administrator-packet",
            "daily-status-tracker-combined-2026-06-23",
            "homs-investigation-reports-redacted-packet"
          ]}
        />
        <ReleaseStats artifacts={artifacts} />
        <ArtifactList artifacts={artifacts} grouped={false} />
      </section>
    </main>
  );
}
