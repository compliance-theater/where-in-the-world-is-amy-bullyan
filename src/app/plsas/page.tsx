import { ArtifactList } from "@/components/ArtifactList";
import { LaneHero } from "@/components/LaneHero";
import { ReleaseStats } from "@/components/ReleaseStats";
import { StartHere } from "@/components/StartHere";
import { heroImages, pageMetadata } from "@/lib/pageMetadata";
import { artifactsForLane } from "@/lib/releaseArtifacts";

export const metadata = pageMetadata({
  title: "PLSAS Releases",
  description:
    "PLSAS board emails, investigation records, and governance notices on maltreatment reporting, Title IX posture, and student-record access.",
  image: heroImages.releaseLane
});

const orderedPlsasIds = [
  "plsas-cothern-june25-response-thread",
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
  "homs-investigation-reports-redacted-packet",
  "administrator-packet",
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
          <p className="plpd-updated">Updated June 26, 2026</p>
        </div>
        <section className="plpd-section plpd-article">
          <h2>The fox is STILL guarding the henhouse</h2>
          <p>
            Amazingly, PLSAS emailed us today. Not surprisingly, it was Mr. Robert Cothern. His prior
            responses have created a recurring accuracy problem, and the unresolved records universe made
            this one worth preserving before anyone had to spend the evening with it.
          </p>
          <p>Here is the bet I would have been comfortable making before opening it:</p>
          <ol>
            <li>He did not provide the overdue record-request productions.</li>
            <li>
              He still did not acknowledge our May 18 data request, the one that will show whether the
              Title IX appeal denial was made without reviewing the underlying facts or after reviewing
              contradictory evidence. That matters because this is their Title IX Coordinator, the person
              charged with making sure complaints are handled fairly.
            </li>
          </ol>
          <p>
            We are in too good of a mood to deal with him right now, so we preserved the Gmail-thread source,
            built public-redacted fake-native renders, and bundled the district message with the same-thread
            response draft. Tomorrow we can compare the record against actual reality. Tonight, Compliance
            Theater built the PDF and the receipt can speak for itself.
          </p>
        </section>
        <StartHere
          artifacts={artifacts}
          ids={[
            "plsas-cothern-june25-response-thread",
            "homs-investigation-reports-redacted-packet",
            "daily-status-tracker-combined-2026-06-23"
          ]}
        />
        <ReleaseStats artifacts={artifacts} />
        <ArtifactList artifacts={artifacts} grouped={false} />
      </section>
    </main>
  );
}
