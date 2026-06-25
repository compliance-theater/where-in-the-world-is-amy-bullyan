import { LaneHero } from "@/components/LaneHero";
import { heroImages, pageMetadata } from "@/lib/pageMetadata";

export const metadata = pageMetadata({
  title: "MDE: proper agency, wrong door",
  description:
    "We brought school-facility maltreatment concerns to MDE, resubmitted in the requested lane, and are still waiting for oversight to behave like oversight.",
  image: heroImages.releaseLane
});

const receipts = [
  {
    label: "Read the complaint we filed",
    href: "#",
    status: "Pending"
  },
  {
    label: "Read the MDE \"not within the date range\" thread",
    href: "#",
    status: "Pending"
  },
  {
    label: "Read the next-business-day MDE rejection thread",
    href: "#",
    status: "Pending"
  },
  {
    label: "Read the enrollment-record data-gate thread",
    href: "#",
    status: "Pending"
  }
];

export default function MdePage() {
  return (
    <main>
      <LaneHero
        title="MDE: proper agency, wrong door"
        titleLines={["Proper agency,", "wrong door"]}
        titleSize="compact"
        kicker="MDE"
        imageSrc="/images/release-lane-hero.jpg"
        imageAlt="Compliance Theatre investigation case board"
      />
      <section className="page-shell lane-body">
        <article className="plpd-article">
          <header className="page-heading lane-summary plpd-lede">
            <p className="plpd-status">
              <strong>
                Status: MDE receipts are pending public-release review. Links stay parked until each record is approved.
              </strong>
            </p>
            <p className="plpd-updated">Updated June 25, 2026</p>
            <p>
              Our hope was simple: once we got the information to the proper agencies, something would happen.
            </p>
            <p>
              We had spent months trying to get a straight answer about whether a serious classroom injury, staff
              supervision, mandated reporting, safety planning, weapons-policy handling, and school-facility
              accountability had actually been reviewed by the people responsible for reviewing those things.
            </p>
            <p>
              MDE was supposed to be the lane for school-facility maltreatment. So we filed.
            </p>
          </header>

          <section className="plpd-section">
            <h2>What happened</h2>
            <p>
              We filed one report. It was rejected because, according to the response, it did not fit the lane correctly.
            </p>
            <p>
              MDE told us we could resubmit. We did that the next business day.
            </p>
            <p>
              The resubmission was not a casual resend. It was specifically tailored to the requirements MDE identified:
              narrower, lane-conscious, and framed around school-facility maltreatment, mandated-reporting compliance,
              direct review of source records, and the limits of what a parent-facing redacted summary can actually prove.
            </p>
            <p>
              We were not asking MDE to decide every adjacent issue. We were asking the agency responsible for school
              maltreatment screening to look at the school-facility record before treating the matter as outside its
              responsibility.
            </p>
          </section>

          <section className="plpd-section">
            <h2>The point of the resubmission</h2>
            <p>
              The resubmitted filing asked MDE to evaluate whether school personnel, the school facility, or both failed
              to protect a child, failed to provide necessary supervision, failed to report suspected maltreatment, or
              failed to take adequate protective or corrective action after a concussion-causing classroom assault.
            </p>
            <p>
              It also asked MDE not to rely only on the District's redacted summaries. Those summaries recognize the
              relevant categories, but the family-facing version does not show the witness basis, staff-awareness
              analysis, mandated-reporting decision, weapons/DIRS rationale, safety measures, or corrective-action
              record.
            </p>
            <p>
              In other words: if the source records show the District handled it correctly, MDE can say that. If the
              records show it did not, MDE can say that too. But the redacted local summary should not be treated as the
              same thing as agency review.
            </p>
          </section>

          <section className="plpd-section">
            <h2>Where it stands</h2>
            <p>
              So far our experience has been...well, take a look at item #3 in the resubmitted complaint and MDE's
              response, then judge for yourself.
            </p>
            <p>
              Item #3 specifically asks MDE to determine whether a mandated report was required, made, timely, delayed,
              absent, corrected, or screened by MDE, including after the District had the later notice materials. That is
              the in-date school-facility reporting question we thought the resubmission was built to put squarely in
              front of the agency.
            </p>
            <p>
              The receipts below are staying pending until the public versions are individually approved.
            </p>
          </section>

          <section className="plpd-section">
            <h2>Receipts</h2>
            <ul className="receipts-list">
              {receipts.map((receipt) => (
                <li key={receipt.label}>
                  <a href={receipt.href} aria-label={`${receipt.label} ${receipt.status.toLowerCase()}`}>
                    <span>{receipt.label}</span>
                    <strong className={`receipt-status-${receipt.status.toLowerCase()}`}>{receipt.status}</strong>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </article>
      </section>
    </main>
  );
}
