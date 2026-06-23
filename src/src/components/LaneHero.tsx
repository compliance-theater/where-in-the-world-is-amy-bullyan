import Image from "next/image";
import { RandomRecordButton } from "@/components/RandomRecordButton";

type LaneHeroProps = {
  title: string;
  kicker: string;
  recordHrefs: string[];
};

export function LaneHero({ title, kicker, recordHrefs }: LaneHeroProps) {
  return (
    <section className="lane-hero">
      <Image
        src="/images/release-lane-hero.png"
        alt="Compliance Theatre investigation case board"
        fill
        priority
        sizes="100vw"
      />
      <div className="lane-hero-copy">
        <p className="eyebrow">{kicker}</p>
        <h1>{title}</h1>
        <RandomRecordButton hrefs={recordHrefs} />
      </div>
    </section>
  );
}
