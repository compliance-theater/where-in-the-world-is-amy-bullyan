import type { Metadata } from "next";
import { ArtifactList } from "@/components/ArtifactList";
import { LaneHero } from "@/components/LaneHero";
import { ReleaseStats } from "@/components/ReleaseStats";
import { artifactsForLane } from "@/lib/releaseArtifacts";

export const metadata: Metadata = {
  title: "Hopkins Releases"
};

export default function HopkinsPage() {
  const artifacts = artifactsForLane("Hopkins");
  return (
    <main>
      <LaneHero title="Hopkins Releases" kicker="Hopkins" recordHrefs={artifacts.map((artifact) => artifact.href)} />
      <section className="page-shell lane-body">
        <div className="page-heading lane-summary">
          <p>Repeated notice of serious concerns; as of 6/23/26 still awaiting response.</p>
          <p>Release-safe child-safety and maltreatment-routing materials already redacted for public review.</p>
        </div>
        <ReleaseStats artifacts={artifacts} />
        <ArtifactList artifacts={artifacts} />
      </section>
    </main>
  );
}
