import type { Metadata } from "next";
import { CorrectionFormBuilder } from "@/components/FormBuilder";

export const metadata: Metadata = {
  title: "Correction Builder"
};

export default function CorrectionBuilderPage() {
  return (
    <main className="page-shell builder-shell">
      <div className="page-heading">
        <p className="eyebrow">Correction Builder</p>
        <h1>Challenge records after inappropriate access is identified.</h1>
        <p>
          Use this after you have identified if and who accessed your child's records inappropriately. It generates a
          branded FERPA/MGDPA correction request asking the district to correct or append the maintained record and
          preserve the access-basis evidence.
        </p>
      </div>
      <CorrectionFormBuilder />
    </main>
  );
}
