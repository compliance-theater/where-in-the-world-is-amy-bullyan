"use client";

import type { FormEvent } from "react";
import { useState } from "react";

type FormState = {
  requestType: "mapping" | "correction";
  parentName: string;
  childName: string;
  districtName: string;
  districtContact: string;
  recordLocators: string;
  dateRange: string;
  concernSummary: string;
  deliveryEmail: string;
  accessorName: string;
  accessorRole: string;
  victimAcknowledgement: boolean;
  excludeGraphics: boolean;
};

const requestInitialState: FormState = {
  requestType: "mapping",
  parentName: "",
  childName: "",
  districtName: "PLSAS/719",
  districtContact: "Robert Cothern/RA unknown",
  recordLocators: "all records from school year 2024-2025",
  dateRange: "",
  concernSummary: "suspected failure to post or otherwise properly define FERPA exemptions",
  deliveryEmail: "",
  accessorName: "",
  accessorRole: "",
  victimAcknowledgement: false,
  excludeGraphics: false
};

const correctionInitialState: FormState = {
  requestType: "correction",
  parentName: "",
  childName: "",
  districtName: "PLSAS/719",
  districtContact: "Robert Cothern/RA unknown",
  recordLocators: "all records from school year 2024-2025",
  dateRange: "",
  concernSummary: "suspected failure to post or otherwise properly define FERPA exemptions",
  deliveryEmail: "",
  accessorName: "",
  accessorRole: "",
  victimAcknowledgement: false,
  excludeGraphics: false
};

type BuilderProps = {
  mode: "mapping" | "correction";
};

function BuilderForm({ mode }: BuilderProps) {
  const [form, setForm] = useState<FormState>(mode === "mapping" ? requestInitialState : correctionInitialState);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  function update(field: keyof FormState, value: string | boolean) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setError("");
    try {
      const response = await fetch("/api/generate-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      if (!response.ok) {
        throw new Error("The PDF could not be generated.");
      }
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      const graphicSuffix = form.excludeGraphics ? "-no-graphics" : "";
      link.download =
        mode === "mapping"
          ? `ferpa-category-mapping-request${graphicSuffix}.pdf`
          : `ferpa-record-correction-request${graphicSuffix}.pdf`;
      link.click();
      URL.revokeObjectURL(url);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <form className="builder-form" onSubmit={submit}>
      <div className="field-grid">
        <label>
          Parent or guardian name
          <input value={form.parentName} onChange={(e) => update("parentName", e.target.value)} required />
        </label>
        <label>
          Child name
          <input value={form.childName} onChange={(e) => update("childName", e.target.value)} required />
        </label>
        <label>
          District name
          <input value={form.districtName} onChange={(e) => update("districtName", e.target.value)} required />
        </label>
        <label>
          District contact / responsible authority
          <input value={form.districtContact} onChange={(e) => update("districtContact", e.target.value)} />
        </label>
        <label>
          Date range
          <input value={form.dateRange} onChange={(e) => update("dateRange", e.target.value)} placeholder="2024-2025 school year" />
        </label>
        <label>
          Delivery email
          <input type="email" value={form.deliveryEmail} onChange={(e) => update("deliveryEmail", e.target.value)} />
        </label>
      </div>
      <label>
        Record locators, systems, or record families
        <textarea value={form.recordLocators} onChange={(e) => update("recordLocators", e.target.value)} rows={5} required />
      </label>
      <label>
        Cause / concern summary
        <textarea value={form.concernSummary} onChange={(e) => update("concernSummary", e.target.value)} rows={5} />
      </label>
      {mode === "correction" ? (
        <>
          <div className="field-grid">
            <label>
              Person who accessed the records
              <input value={form.accessorName} onChange={(e) => update("accessorName", e.target.value)} placeholder="Name or role if name is unknown" />
            </label>
            <label>
              Person's role
              <input value={form.accessorRole} onChange={(e) => update("accessorRole", e.target.value)} placeholder="Contractor, board member, investigator, vendor..." />
            </label>
          </div>
          <label className="check-row">
            <input
              type="checkbox"
              checked={form.victimAcknowledgement}
              onChange={(e) => update("victimAcknowledgement", e.target.checked)}
            />
            <span>
              Include victim acknowledgement cure. This asks the district to add a statement to your child's record
              identifying people who have seen more of the record than you or your child.
            </span>
          </label>
        </>
      ) : null}
      <label className="check-row">
        <input
          type="checkbox"
          checked={form.excludeGraphics}
          onChange={(e) => update("excludeGraphics", e.target.checked)}
        />
        <span>
          Exclude graphics. Generate a plain body-only PDF without the cover art or logo. The request text stays the
          same; it just loses the pretty wrapping paper.
        </span>
      </label>
      <button type="submit" disabled={busy}>
        {busy ? "Generating..." : mode === "mapping" ? "Generate FERPA Mapping Request PDF" : "Generate FERPA Correction Request PDF"}
      </button>
      {error ? <p className="form-error">{error}</p> : null}
    </form>
  );
}

export function RequestFormBuilder() {
  return <BuilderForm mode="mapping" />;
}

export function CorrectionFormBuilder() {
  return <BuilderForm mode="correction" />;
}
