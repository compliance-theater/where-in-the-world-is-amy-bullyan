import Image from "next/image";

type FormHeroProps = {
  label: string;
  imageAlt?: string;
  imageSrc?: string;
  titleLines?: [string, string?];
};

export function FormHero({
  label,
  imageAlt = "Three illustrated kittens in a colorful accountability poster style",
  imageSrc = "/images/form-builder-cats-hero.jpg",
  titleLines = ["Dismantle Systems", "of Oppression"]
}: FormHeroProps) {
  const titleLabel = titleLines.filter(Boolean).join(" ");

  return (
    <section className="form-hero" aria-label={label}>
      <div className="form-hero-art">
        <Image
          className="form-hero-image"
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
        />
      </div>
      <p className={titleLines[1] ? "form-hero-title" : "form-hero-title single-line"} aria-label={titleLabel}>
        <span aria-hidden="true">{titleLines[0]}</span>
        {titleLines[1] ? <span aria-hidden="true">{titleLines[1]}</span> : null}
      </p>
    </section>
  );
}
