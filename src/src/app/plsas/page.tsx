import type { Metadata } from "next";
import { ArtifactList } from "@/components/ArtifactList";
import { LaneHero } from "@/components/LaneHero";
import { ReleaseStats } from "@/components/ReleaseStats";
import { artifactsForLane } from "@/lib/releaseArtifacts";

export const metadata: Metadata = {
  title: "PLSAS Releases"
};

export default function PlsasPage() {
  const artifacts = artifactsForLane("PLSAS");
  return (
    <main>
      <LaneHero title="PLSAS Releases" kicker="PLSAS" recordHrefs={artifacts.map((artifact) => artifact.href)} />
      <section className="page-shell lane-body">
        <div className="page-heading lane-summary">
          <p>
            Suspected suppression of maltreatment reporting, bad-faith Title IX investigative posture, and suspected
            record access and classification violations.
          </p>
          <p>Redacted materials only. Native originals stay off the public table.</p>
        </div>
        <ReleaseStats artifacts={artifacts} />
        <ArtifactList artifacts={artifacts} />
      </section>
    </main>
  );
}
