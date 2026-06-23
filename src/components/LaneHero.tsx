import Image from "next/image";
import { RandomRecordButton } from "@/components/RandomRecordButton";

type LaneHeroProps = {
  title: string;
  kicker: string;
  recordHrefs?: string[];
  imageSrc?: string;
  imageAlt?: string;
};

export function LaneHero({
  title,
  kicker,
  recordHrefs = [],
  imageSrc = "/images/release-lane-hero.png",
  imageAlt = "Compliance Theatre investigation case board"
}: LaneHeroProps) {
  return (
    <section className="lane-hero">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
      />
      <div className="lane-hero-copy">
        <p className="eyebrow">{kicker}</p>
        <h1>{title}</h1>
        {recordHrefs.length > 0 ? <RandomRecordButton hrefs={recordHrefs} /> : null}
      </div>
    </section>
  );
}
