import Image from "next/image";
import Link from "next/link";
import { featuredArtifacts, releaseArtifacts } from "@/lib/releaseArtifacts";
import { ArtifactList } from "@/components/ArtifactList";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <Image
          src="/images/hero-amy-bullyan.png"
          alt="Mystery Compliance Theatre 2000 case board"
          width={1792}
          height={1024}
          priority
          sizes="100vw"
          className="hero-image"
        />
      </section>
      <section className="action-band" aria-label="Primary release portal links">
        <div className="hero-actions">
          <Link href="/plsas">PLSAS Releases</Link>
          <Link href="/hopkins">Hopkins Releases</Link>
          <Link href="/plpd">PLPD</Link>
          <Link href="/form-builder">Build A Request</Link>
        </div>
      </section>
      <section className="band">
        <div className="metric">
          <strong>{releaseArtifacts.length}</strong>
          <span>release entries</span>
        </div>
        <div className="metric">
          <strong>Redacted</strong>
          <span>family and minor PII boxed before release</span>
        </div>
        <div className="metric">
          <strong>Receipts</strong>
          <span>board notices, auto-acks, correction packets</span>
        </div>
      </section>
      <section className="page-shell featured-shell">
        <div className="page-heading compact-heading">
          <p className="eyebrow">Featured receipts</p>
          <h2>Start with the records that explain the rest.</h2>
        </div>
        <ArtifactList artifacts={featuredArtifacts} compact />
      </section>
    </main>
  );
}
