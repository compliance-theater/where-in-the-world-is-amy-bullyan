import { LaneHero } from "@/components/LaneHero";
import { heroImages, pageMetadata } from "@/lib/pageMetadata";

export const metadata = pageMetadata({
  title: "PLPD",
  description:
    "PLPD status update on the pending scope clarification for mandated-reporter review.",
  image: heroImages.plpd
});

export default function PlpdPage() {
  return (
    <main>
      <LaneHero
        title="PLPD"
        titleLines={["PLPD"]}
        titleSize="compact"
        kicker="PLPD"
        imageSrc="/images/plpd-hero.jpg"
        imageAlt="Compliance Theatre processing unit review desk"
      />
      <section className="page-shell lane-body">
        <div className="page-heading lane-summary">
          <h2>Status: Scope clarification pending</h2>
          <p>
            On June 17–18, 2026, PLPD stated that it would not conduct a criminal investigation into possible
            mandated-reporter failure because two underlying incidents had been reported to PLPD through proper channels.
            The family has asked PLPD to clarify whether its review addressed only the underlying student incidents or
            also the separate adult failure-to-report and reporting-interference allegations. That clarification remains
            pending.
          </p>
        </div>
      </section>
    </main>
  );
}
