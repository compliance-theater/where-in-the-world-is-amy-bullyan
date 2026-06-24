import type { ReleaseArtifact } from "@/lib/releaseArtifacts";

type StartHereProps = {
  artifacts: ReleaseArtifact[];
  ids: string[];
};

export function StartHere({ artifacts, ids }: StartHereProps) {
  const featured = ids
    .map((id) => artifacts.find((artifact) => artifact.id === id))
    .filter(Boolean) as ReleaseArtifact[];

  if (featured.length === 0) {
    return null;
  }

  return (
    <section className="start-here" aria-label="Start here">
      <div>
        <p className="eyebrow">Start here</p>
        <h2>Open the records that explain the rest.</h2>
      </div>
      <div className="start-here-links">
        {featured.map((artifact) => (
          <a href={artifact.href} key={artifact.id} target="_blank" rel="noreferrer">
            <span>{artifact.title}</span>
            <strong>{artifact.smell}</strong>
          </a>
        ))}
      </div>
    </section>
  );
}
