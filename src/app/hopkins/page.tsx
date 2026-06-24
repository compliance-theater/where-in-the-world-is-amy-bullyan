import { ArtifactList } from "@/components/ArtifactList";
import { LaneHero } from "@/components/LaneHero";
import { ReleaseStats } from "@/components/ReleaseStats";
import { StartHere } from "@/components/StartHere";
import { heroImages, pageMetadata } from "@/lib/pageMetadata";
import { artifactsForLane } from "@/lib/releaseArtifacts";

export const metadata = pageMetadata({
  title: "Hopkins Releases",
  description:
    "Hopkins board emails and maltreatment-routing records sent before the superintendent transition, with no substantive response shown.",
  image: heroImages.releaseLane
});

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
        <StartHere
          artifacts={artifacts}
          ids={["hmr-combined-redacted", "hopkins-native-send-04", "hopkins-native-send-01"]}
        />
        <ReleaseStats artifacts={artifacts} />
        <ArtifactList artifacts={artifacts} />
      </section>
    </main>
  );
}
