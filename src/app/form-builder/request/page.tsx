import type { Metadata } from "next";
import { RequestFormBuilder } from "@/components/FormBuilder";

export const metadata: Metadata = {
  title: "Request Builder"
};

export default function RequestBuilderPage() {
  return (
    <main className="page-shell builder-shell">
      <div className="page-heading">
        <p className="eyebrow">Request Builder</p>
        <h1>Ask the district to identify who saw your child's records.</h1>
        <p>
          Generate a FERPA/MGDPA access-basis request for disclosure logs, access records, record categories,
          school-official mappings, and the claimed basis for each person who saw the records.
        </p>
      </div>
      <RequestFormBuilder />
    </main>
  );
}
