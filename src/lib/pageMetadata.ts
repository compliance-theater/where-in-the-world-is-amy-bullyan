import type { Metadata } from "next";

type HeroImage = {
  url: string;
  width: number;
  height: number;
  alt: string;
};

type PageMetadataInput = {
  title: string;
  description: string;
  image: HeroImage;
};

export const heroImages = {
  home: {
    url: "/images/hero-amy-bullyan.jpg",
    width: 1774,
    height: 887,
    alt: "Mystery Compliance Theatre 2000 case board"
  },
  releaseLane: {
    url: "/images/release-lane-hero.jpg",
    width: 1774,
    height: 887,
    alt: "Compliance Theatre investigation case board"
  },
  plpd: {
    url: "/images/plpd-hero.jpg",
    width: 1451,
    height: 1084,
    alt: "Compliance Theatre processing unit review desk"
  },
  formBuilder: {
    url: "/images/form-builder-cats-hero.jpg",
    width: 1734,
    height: 907,
    alt: "Three illustrated kittens in a colorful accountability poster style"
  },
  faq: {
    url: "/images/faq-detective-compliance-animals-hero.jpg",
    width: 1672,
    height: 941,
    alt: "Detective answering questions from adorable compliance animals in a cozy investigation office"
  }
} satisfies Record<string, HeroImage>;

export function pageMetadata({ title, description, image }: PageMetadataInput): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      siteName: "Mystery Compliance Theatre 2000",
      images: [image]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.url]
    }
  };
}
