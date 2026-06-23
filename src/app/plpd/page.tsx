import type { Metadata } from "next";
import { LaneHero } from "@/components/LaneHero";

export const metadata: Metadata = {
  title: "PLPD"
};

export default function PlpdPage() {
  return (
    <main>
      <LaneHero
        title="Coming Soon..."
        titleLines={["Coming", "Soon..."]}
        titleSize="compact"
        kicker="PLPD"
        imageSrc="/images/plpd-hero.png"
        imageAlt="Compliance Theatre processing unit review desk"
      />
      <section className="page-shell lane-body">
        <div className="page-heading lane-summary">
          <p>
            We have reported PLSAS&apos;s failure to comply with mandated reporting laws to the Prior Lake Police
            Department and are awaiting confirmation on the results of their investigation.
          </p>
        </div>
      </section>
    </main>
  );
}
