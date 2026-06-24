import { CorrectionFormBuilder } from "@/components/FormBuilder";
import { heroImages, pageMetadata } from "@/lib/pageMetadata";

export const metadata = pageMetadata({
  title: "Correction Builder",
  description:
    "Generate a FERPA/MGDPA correction request after access has been identified, with optional cure language for victim acknowledgement.",
  image: heroImages.formBuilder
});

export default function CorrectionBuilderPage() {
  return (
    <main className="page-shell builder-shell">
      <div className="page-heading">
        <p className="eyebrow">Correction Builder</p>
        <h1>Challenge records after inappropriate access is identified.</h1>
        <p>
          Use this after you have identified if and who accessed your child's records inappropriately. It generates a
          FERPA/MGDPA correction request asking the district to correct or append the maintained record and preserve
          the access-basis evidence.
        </p>
      </div>
      <CorrectionFormBuilder />
    </main>
  );
}
