import { LaneHero } from "@/components/LaneHero";
import { heroImages, pageMetadata } from "@/lib/pageMetadata";

export const metadata = pageMetadata({
  title: "PLPD Closed the Case Without Saying What It Investigated",
  description:
    "The peer assaults reached police. The unanswered question is whether anyone investigated the adult failure-to-report, supervision, and reporting-interference allegations.",
  image: heroImages.plpd
});

const receipts = [
  {
    label: "Read the complete PLPD correspondence",
    href: "/release-assets/plpd/plpd-complete-correspondence-2026-06-25.pdf",
    status: "Linked"
  },
  {
    label: "Review the District's own notice and reporting records",
    href: "/release-assets/plsas/homs-investigation-reports-gross-bubbles-2026-06-25.pdf",
    status: "Linked"
  },
  {
    label: "Track the pending PLPD data requests",
    href: "/release-assets/plpd/plpd-data-requests-public-tracker-2026-06-25.xlsx",
    status: "Linked"
  },
  {
    label: "See the requests",
    href: "/release-assets/plpd/plpd-data-requests-tightly-redacted-2026-06-25.pdf",
    status: "Linked"
  },
  {
    label: "Read the PLPD scope-correction request",
    href: "/release-assets/plpd/plpd-scope-correction-public-redacted-2026-06-25.pdf",
    status: "Linked"
  }
];

function Redaction({ size = "medium" }: { size?: "short" | "medium" | "wide" }) {
  return <span className={`redaction-box redaction-box-${size}`} role="img" aria-label="redacted text" />;
}

export default function PlpdPage() {
  return (
    <main>
        <LaneHero
          title="PLPD Closed the Case Without Saying What It Investigated"
          titleLines={["PLPD", "Closed", "Without", "Saying", "What It", "Investigated"]}
          titleSize="compact"
          kicker="PLPD"
          className="plpd-hero"
        imageSrc="/images/plpd-hero.jpg"
        imageAlt="Compliance Theatre processing unit review desk"
      />
      <section className="page-shell lane-body">
        <article className="plpd-article">
          <header className="page-heading lane-summary plpd-lede">
            <p className="plpd-status">
              <strong>
                Status: ICR 26009995 closed. PLPD has refused to identify the scope of its review in writing. Records
                requests are pending.
              </strong>
            </p>
            <p className="plpd-dek">
              The peer assaults reached police. The unanswered question is whether anyone investigated the adult
              failure-to-report, supervision, and reporting-interference allegations.
            </p>
            <p className="plpd-updated">Updated June 26, 2026</p>
            <p>
              A student was reportedly struck in the head five times with a chair or stool during class, in two episodes
              separated by approximately five minutes, causing a concussion.
            </p>
            <p>
              The same student also reported repeated peer <Redaction size="wide" /> or <Redaction size="medium" /> in
              another classroom while a different teacher was responsible for supervising the room.
            </p>
            <p>
              The question presented to the Prior Lake Police Department was not whether the peer incidents had reached
              police. They had. An independent child professional made a mandated report, and the parents called.
            </p>
            <p>The question was whether school employees:</p>
            <ul>
              <li>failed to report suspected maltreatment involving school staff or the school facility;</li>
              <li>failed to protect or supervise a child during serious in-class assaults; or</li>
              <li>
                intentionally delayed, redirected, discouraged, prevented, or attempted to prevent a mandated
                maltreatment report.
              </li>
            </ul>
            <p>
              Minnesota law makes a mandated reporter's qualifying failure to report a misdemeanor. It also makes
              intentionally preventing or attempting to prevent a mandated report a misdemeanor.
            </p>
          </header>

          <section className="plpd-section">
            <h2>What PLPD did</h2>
            <p>
              On June 17, 2026, PLPD said there were "no criminal violations to investigate" because "the incident" had
              been reported and investigated.
            </p>
            <p>
              We responded that the referral was not simply about the underlying student-on-student assault. It concerned
              later adult conduct, including possible failure to report and possible interference with reporting.
            </p>
            <p>
              We then provided a detailed, 34-point clarification of the issues. Those points were not presented as 34
              separate crimes. They identified source-backed evidence bearing on notice, knowledge, intent, means, and
              the possibility that District procedures were used to keep a school-maltreatment complaint inside the
              institution it concerned.
            </p>
            <p>We repeatedly offered to provide the supporting source records.</p>
            <p>PLPD did not contact the reporting parent before issuing its disposition. It did not ask for the offered evidence.</p>
            <p>
              The next day, PLPD changed its explanation. It said "the two incidents" had been reported to PLPD "via the
              proper channels."
            </p>
            <p>That still answered the wrong question.</p>
            <p>
              At most, it established that the underlying peer incidents reached police. It did not establish that anyone
              reported suspected neglect by school personnel or the school facility. It did not establish that PLPD
              notified MDE. It did not establish that PLPD evaluated the separate intentional-reporting-interference
              allegation.
            </p>
          </section>

          <section className="plpd-section">
            <h2>We asked PLPD to identify what it actually reviewed</h2>
            <p>We asked PLPD to say whether it had:</p>
            <ol>
              <li>reviewed only its existing files concerning the underlying peer incidents;</li>
              <li>reviewed the separate adult failure-to-report and reporting-interference allegations; or</li>
              <li>decided not to investigate those allegations despite the unresolved factual questions.</li>
            </ol>
            <p>
              We did not ask PLPD to disclose private juvenile, student, or personnel information. We asked for
              category-level scope clarification so its closure could not later be misrepresented as a finding that every
              issue had been investigated and disproved.
            </p>
            <p>
              The Chief of Police responded that PLPD had completed "any and all investigative work" it intended to
              perform "given information available."
            </p>
            <p>He also stated that PLPD would provide no further written response other than through formal data requests.</p>
            <p>PLPD therefore closed the matter while refusing to identify:</p>
            <ul>
              <li>which allegations it evaluated;</li>
              <li>which records it reviewed;</li>
              <li>which witnesses or agencies it contacted;</li>
              <li>whether it checked for police-to-MDE notification;</li>
              <li>whether it consulted a prosecutor;</li>
              <li>or whether it examined the adult reporting-interference theory at all.</li>
            </ul>
          </section>

          <section className="plpd-section">
            <h2>The statutory hole PLPD did not answer</h2>
            <p>
              For alleged maltreatment in a school, the Minnesota Department of Education is the agency responsible for
              screening and investigating.
            </p>
            <p>
              When police receive a qualifying maltreatment report, they must immediately notify the responsible agency
              orally and in writing and forward the written report.
            </p>
            <p>
              When MDE receives a school-maltreatment report, it must inform the parent within ten days whether it will
              investigate.
            </p>
            <p>We received no such MDE notice.</p>
            <p>That does not, by itself, prove which person or agency dropped the statutory chain. It does establish an unresolved and auditable fork:</p>
            <ul>
              <li>no qualifying school-maltreatment report was made;</li>
              <li>PLPD received one but did not route it to MDE;</li>
              <li>MDE received one but did not provide the required parent notice; or</li>
              <li>the relevant routing and notice records exist but have not been identified or produced.</li>
            </ul>
            <p>PLPD's phrase "proper channels" does not tell the public which of those occurred.</p>
          </section>

          <section className="plpd-section">
            <h2>Why this is gross</h2>
            <p>
              The adult-accountability question was converted into a statement that the children’s assaults had already
              reached police.
            </p>
            <p>
              The existence of the peer assaults was used twice: first as the harm that should have triggered review of
              the adults responsible for supervision and reporting, and then as the reason no separate review of those
              adults was supposedly necessary.
            </p>
            <p>The person who reported the possible crimes was not contacted before the matter was closed.</p>
            <p>Repeated offers to provide written, source-backed evidence were not accepted.</p>
            <p>As the questions became more precise, PLPD's explanation evolved:</p>
            <blockquote>
              <p>"The incident" was investigated.</p>
            </blockquote>
            <p>Then:</p>
            <blockquote>
              <p>"The two incidents" were reported through proper channels.</p>
            </blockquote>
            <p>Then:</p>
            <blockquote>
              <p>All investigative work was complete "given information available."</p>
            </blockquote>
            <p>Finally:</p>
            <blockquote>
              <p>PLPD would not identify its scope in writing.</p>
            </blockquote>
            <p>Now the family must use formal data requests merely to learn what PLPD meant by "any and all investigative work."</p>
            <p>
              PLPD Records has additionally required photo identification and proof of parentage before processing access
              to records concerning the parent and child—even though the same parent email address appears throughout the
              referral, follow-up correspondence, and records PLPD says it reviewed.
            </p>
            <p>This is how accountability can disappear without anyone ever writing, "We did not investigate that."</p>
            <p>
              An institution issues broad closure language, refuses to define what the closure covers, and leaves the
              family to spend additional months proving what the closure never established.
            </p>
          </section>

          <section className="plpd-section">
            <h2>What we are—and are not—saying</h2>
            <p>We are not claiming that PLPD and PLSAS colluded.</p>
            <p>We are not claiming that every administrative defect is independently criminal.</p>
            <p>
              We are saying that PLPD's written record does not support a finding that the adult mandated-reporting and
              reporting-interference allegations were investigated and disproved.
            </p>
            <p>The written record supports only that:</p>
            <ul>
              <li>PLPD closed the referral;</li>
              <li>PLPD relied on the fact that the underlying peer incidents reached police;</li>
              <li>PLPD did not contact the reporting parent before doing so;</li>
              <li>PLPD did not accept the additional source evidence repeatedly offered;</li>
              <li>and PLPD refused to identify whether it evaluated the separate adult-conduct allegations.</li>
            </ul>
            <p>A refusal to disclose scope is not proof of a thorough investigation.</p>
          </section>

          <section className="plpd-section">
            <h2>Too clever for their own good</h2>
            <p>
              Like MDE, PLPD suddenly decided it needed identity and parentage validation before releasing records. If we
              did not know any better, the symmetry would almost suggest the lawyers were talking to each other. We are
              not asserting that; presumably there is some other explanation for why two separate agencies suddenly moved
              into the same record-gating posture at the same time.
            </p>
            <p>
              For PLPD, that gate creates a problem of its own. In school-facility maltreatment matters, parent notice
              and agency routing are not decorative. The school must notify the parent of an incident that may constitute
              maltreatment, and MDE must tell the parent within ten days whether it is investigating a report it
              receives. A screen-out does not make the parent-notice issue disappear; it makes the notice and routing
              record more important.
            </p>
            <p>
              That was one of the source-backed issues identified in our first follow-up. We repeatedly raised it with
              PLPD, and we repeatedly offered to provide the written evidence. Adding fuel to the fire, the core source
              material included with the initial submission identifies us as the child's parents.
            </p>
            <p>
              By requiring us to prove we are the child's parents now, PLPD effectively created a contradiction: if it did
              not know that basic fact, how thorough could its review of the parent-notice problem have been? Maybe that
              helps explain why PLPD refused to clarify scope.
            </p>
            <p>
              Thankfully, Compliance Theater was available to come to the rescue. We have filed a correction request
              identifying the inconsistency and asking PLPD to update the record so it accurately reflects the nature of
              PLPD's investigation. They have 30 days to respond. If they act like the other agencies and institutions we
              have had the pleasure of dealing with, they will take all 30 of them.
            </p>
            <p>
              That is fine. This is only the first inconsistency already on the books, and the next batch of requests is
              waiting for PLPD to produce what has already been asked.
            </p>
          </section>

          <section className="plpd-section">
            <h2>Current status</h2>
            <ul>
              <li>PLPD considers ICR 26009995 closed.</li>
              <li>PLPD has refused further written scope clarification.</li>
              <li>Formal requests are pending for the complete ICR 26009995 file.</li>
              <li>Separate requests seek records documenting any actual review of mandated-reporter failure or reporting interference.</li>
              <li>Records have also been requested concerning police-to-MDE routing.</li>
              <li>Records are pending concerning the late Officer Baker / Scott Peterson supplemental-report contact.</li>
              <li>MDE has been asked to confirm whether it ever received an earlier maltreatment report concerning these events.</li>
              <li>
                A correction request asks PLPD to correct its misleading and inaccurate scope record: PLPD claimed it
                completed investigative work on a matter that includes failure to notify the parent, while PLPD Records
                simultaneously required proof of parentage as though it did not know the reporting parent was the
                child's parent.
              </li>
              <li>The unresolved criminal issues are being preserved for independent county-attorney review.</li>
            </ul>
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
