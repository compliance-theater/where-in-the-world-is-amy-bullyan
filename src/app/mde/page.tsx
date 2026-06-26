import { LaneHero } from "@/components/LaneHero";
import { heroImages, pageMetadata } from "@/lib/pageMetadata";

export const metadata = pageMetadata({
  title: "MDE: proper agency, wrong door",
  description:
    "We brought child-find and special-education concerns to MDE, resubmitted in the requested lane, and are still waiting for oversight to behave like oversight.",
  image: heroImages.mde
});

const receipts = [
  {
    label: "MDE 26-240C Special Education Complaint (Public Redacted Index Only)",
    href: "/release-assets/mde/mde-26-240c-special-education-complaint-public-redacted-index-only-2026-06-25.pdf",
    status: "Linked"
  },
  {
    label: "Packet A: finally a fair hearing",
    href: "/release-assets/mde/mde-finally-a-fair-hearing-public-redacted-no-index-2026-06-25.pdf",
    status: "Linked"
  },
  {
    label: "Packet B: whats wrong with mde records",
    href: "/release-assets/mde/mde-whats-wrong-with-mde-records-public-redacted-no-index-2026-06-25.pdf",
    status: "Linked"
  },
  {
    label: "Formal Breach Determination Request: MDE parent verification and prior disclosure determination",
    href: "/release-assets/mde/mde-parent-verification-breach-determination-public-redacted-2026-06-25.pdf",
    status: "Linked"
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
        className="mde-hero"
        imageSrc={heroImages.mde.url}
        imageAlt={heroImages.mde.alt}
      />
      <section className="page-shell lane-body">
        <article className="plpd-article">
          <header className="page-heading lane-summary plpd-lede">
            <p className="plpd-status">
              <strong>
                Status: MDE receipts are being released as each record clears public-release review.
              </strong>
            </p>
            <p className="plpd-updated">Updated June 25, 2026</p>
            <p>
              Our hope was simple: once we got the information to the proper agencies, something would happen.
            </p>
            <p>
              We had spent months trying to get a straight answer about whether the District's child-find,
              special-education, safety-planning, and educational-access record had actually been reviewed by the people
              responsible for reviewing those things.
            </p>
            <p>
              MDE was supposed to be the lane for child-find and special-education oversight. So we filed.
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
              narrower, lane-conscious, and framed around child-find and special-education obligations, direct review of
              source records, and the limits of what a parent-facing redacted summary can actually prove.
            </p>
            <p>
              We were not asking MDE to decide every adjacent issue. We were asking the state education agency
              responsible for special-education oversight to look at the child-find and education-access record before
              treating the matter as outside its
              responsibility.
            </p>
          </section>

          <section className="plpd-section">
            <h2>The point of the resubmission</h2>
            <p>
              The resubmission targeted the District's refusal to participate in safety planning and Child Find. Because
              these complaints have a one-year lookback window, the resubmission specifically included counts anchored
              inside that time window.
            </p>
            <p>
              It also asked MDE not to rely only on the District's redacted summaries. Those summaries recognize the
              relevant categories, but the family-facing version does not show the dates used, the safety-planning
              refusal record, the child-find notice and evaluation record, the educational-impact record, or the basis for
              screening the in-window counts out.
            </p>
            <p>
              In other words: if MDE believed those counts were outside its complaint window, outside its lane, or
              otherwise not actionable, it could identify the dates, records, and legal basis it used. But the redacted
              local summary should not be treated as the same thing as agency review.
            </p>
          </section>

          <section className="plpd-section">
            <h2>Why the LGE matters</h2>
            <p>
              LGE means local government entity. In this context, the important practical point is the public-side entity
              MDE's own organization records connect to a nonpublic school. IDEA uses the related term LEA, or local
              educational agency.
            </p>
            <p>
              That matters because parentally placed private-school Child Find does not simply vanish when a family
              removes a child from the public building. For parentally placed private-school students, the LEA where the
              private school is located has a locate, identify, and evaluate duty for students suspected of having
              disabilities.
            </p>
            <p>
              The complaint therefore pointed to MDE's own organization record identifying PLSAS as the public
              representative for the nonpublic placement. That is why this was not just a historical withdrawal argument:
              MDE was being asked whether the public entity tied to that placement still had Child Find responsibility
              while safety-planning and educational-access problems remained unresolved. This served to push the
              violation date on our complaint out until the end of the school year.
            </p>
          </section>

          <section className="plpd-section">
            <h2>Where it stands</h2>
            <p>
              So far our experience has been...well, take a look at item #3 in the resubmitted complaint and MDE's
              response, then judge for yourself. The problem with getting cute about access gates is that eventually you
              have to account for your own prior actions.
            </p>
            <p>
              Item #3 specifically asks MDE to identify the dates and record basis it used to screen out the child-find
              and special-education allegations, including whether it considered the counts specifically included within
              the one-year lookback window. That is the in-lane special-education question we thought the resubmission
              was built to put squarely in front of the agency.
            </p>
            <p>
              MDE later stated that it could not verify we were the student's parents without additional external proof.
              That position creates a very ugly accounting problem: before invoking that gate to withhold the dates and
              basis it used to screen out the complaint, MDE had already transmitted sensitive private child data to us.
              If MDE's position is that it did not know whether we were authorized parents, then MDE needs to explain why
              it was comfortable sending private child data first and only demanding parental authorization when the
              requested records would show how it screened out the special-education complaint.
            </p>
            <p>
              Privacy laws exist to protect children, not institutions. They should not become a one-way valve where
              sensitive child data can move out when it is convenient, but the accountability records needed to test an
              agency decision stay locked behind a newly asserted access barrier. There is only one word for that: gross.
            </p>
          </section>

          <section className="plpd-section">
            <h2>Receipts</h2>
            <ul className="receipts-list">
              {receipts.map((receipt) => (
                <li key={receipt.label}>
                  <a
                    href={receipt.href}
                    aria-label={`${receipt.label}: ${receipt.status === "Linked" ? "Read PDF" : receipt.status}`}
                  >
                    <span>{receipt.label}</span>
                    <strong className={`receipt-status-${receipt.status.toLowerCase()}`}>
                      {receipt.status === "Linked" ? "Read PDF" : receipt.status}
                    </strong>
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
