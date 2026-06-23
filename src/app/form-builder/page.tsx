import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Form Builder"
};

export default function FormBuilderPage() {
  return (
    <main>
      <section className="form-hero" aria-label="Form Builder">
        <Image
          src="/images/form-builder-hero.png"
          alt="Dismantle Systems of Oppression"
          width={1664}
          height={1216}
          priority
          sizes="100vw"
        />
      </section>
      <section className="page-shell builder-shell">
        <div className="page-heading">
          <p className="eyebrow">Form Builder</p>
          <h1>Build the request, then build the correction.</h1>
          <p>Start by forcing the district to identify access. Once access is mapped, use the correction flow to challenge records that should not have been viewed, used, or disclosed.</p>
          <p className="privacy-note">
            Privacy note: submitted form data is used only to generate the PDF in your browser session. This site does not
            log, keep, sell, or otherwise retain submitted form data.
          </p>
        </div>
        <div className="builder-choice-grid">
          <Link className="builder-choice" href="/form-builder/request">
            <span className="eyebrow">Request</span>
            <h2>Who saw my child's records?</h2>
            <p>Generate a FERPA/MGDPA request asking the district to identify access, disclosure logs, record categories, roles, and the claimed FERPA basis for people who saw your child's records.</p>
          </Link>
          <Link className="builder-choice" href="/form-builder/correction">
            <span className="eyebrow">Correction</span>
            <h2>This person should not have seen this.</h2>
            <p>Generate a correction request after access has been identified, with optional cure language for victim acknowledgement.</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
