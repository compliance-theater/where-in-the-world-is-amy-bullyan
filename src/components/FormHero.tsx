import Image from "next/image";

type FormHeroProps = {
  label: string;
};

export function FormHero({ label }: FormHeroProps) {
  return (
    <section className="form-hero" aria-label={label}>
      <div className="form-hero-art">
        <Image
          className="form-hero-image"
          src="/images/form-builder-cats-hero.jpg"
          alt="Three illustrated kittens in a colorful accountability poster style"
          fill
          priority
          sizes="100vw"
        />
      </div>
      <p className="form-hero-title" aria-label="Dismantle Systems of Oppression">
        <span aria-hidden="true">Dismantle Systems</span>
        <span aria-hidden="true">of Oppression</span>
      </p>
    </section>
  );
}
