import type { Metadata } from "next";
import Image from "next/image";
import { faqs } from "@/lib/faq";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers about FERPA definitions, red boxes, public records, and why board email receipt proofs matter."
};

export default function FaqPage() {
  return (
    <main>
      <section className="form-hero" aria-label="FAQ">
        <Image
          src="/images/form-builder-hero.png"
          alt="Dismantle Systems of Oppression"
          width={1664}
          height={1216}
          priority
          sizes="100vw"
        />
      </section>
      <section className="page-shell faq-shell">
        <div className="page-heading">
          <p className="eyebrow">FAQ</p>
          <h1>Receipts, red boxes, and FERPA definitions.</h1>
        </div>
        <div className="faq-list">
          {faqs.map((faq) => (
            <article className="faq-item" key={faq.question}>
              <h2>{faq.question}</h2>
              <p>{renderAnswer(faq)}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

function renderAnswer(faq: (typeof faqs)[number]) {
  if (!faq.emphasis) {
    return faq.answer;
  }

  const pattern = new RegExp(`\\b(${faq.emphasis.join("|")})\\b`, "gi");
  return faq.answer.split(pattern).map((part, index) => {
    const shouldEmphasize = faq.emphasis?.some((word) => word.toLowerCase() === part.toLowerCase());
    return shouldEmphasize ? <strong key={`${part}-${index}`}>{part}</strong> : part;
  });
}
