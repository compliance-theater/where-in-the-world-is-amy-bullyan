import type { ReleaseArtifact } from "@/lib/releaseArtifacts";

function shortDate(value: string) {
  const [year, month, day] = value.split("-").map(Number);
  return `${month}/${day}/${String(year).slice(2)}`;
}

function smellScore(value: string) {
  return Number.parseFloat(value.replace("/10", ""));
}

export function ReleaseStats({ artifacts }: { artifacts: ReleaseArtifact[] }) {
  const dates = artifacts.map((artifact) => artifact.date).sort();
  const pageTotal = artifacts.reduce((sum, artifact) => sum + artifact.pages, 0);
  const averageSmell =
    artifacts.reduce((sum, artifact) => sum + smellScore(artifact.smell), 0) / Math.max(artifacts.length, 1);
  const dateRange = dates.length ? `${shortDate(dates[0])} - ${shortDate(dates[dates.length - 1])}` : "No packets";

  return (
    <section className="stats-band" aria-label="Release packet summary">
      <div className="stat-cell">
        <span>Date range</span>
        <strong>{dateRange}</strong>
      </div>
      <div className="stat-cell">
        <span>Total pages</span>
        <strong>{pageTotal}</strong>
      </div>
      <div className="stat-cell">
        <span>Average smell</span>
        <strong>{averageSmell.toFixed(1)}/10</strong>
      </div>
    </section>
  );
}
