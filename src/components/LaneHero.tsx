import Image from "next/image";
import { RandomRecordButton } from "@/components/RandomRecordButton";

type LaneHeroProps = {
  title: string;
  kicker: string;
  recordHrefs?: string[];
  imageSrc?: string;
  imageAlt?: string;
  titleLines?: string[];
  titleSize?: "default" | "compact";
};

export function LaneHero({
  title,
  kicker,
  recordHrefs = [],
  imageSrc = "/images/release-lane-hero.jpg",
  imageAlt = "Compliance Theatre investigation case board",
  titleLines,
  titleSize = "default"
}: LaneHeroProps) {
  const lines = titleLines ?? [title];

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
        <h1 className={titleSize === "compact" ? "compact-title" : undefined}>
          {lines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h1>
        {recordHrefs.length > 0 ? <RandomRecordButton hrefs={recordHrefs} /> : null}
      </div>
    </section>
  );
}
