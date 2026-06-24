import { RequestFormBuilder } from "@/components/FormBuilder";
import { heroImages, pageMetadata } from "@/lib/pageMetadata";

export const metadata = pageMetadata({
  title: "Request Builder",
  description:
    "Generate a FERPA/MGDPA access-basis request for disclosure logs, access records, record categories, roles, and claimed FERPA basis.",
  image: heroImages.formBuilder
});

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
