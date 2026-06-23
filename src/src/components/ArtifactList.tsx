import type { ReleaseArtifact } from "@/lib/releaseArtifacts";

type ArtifactListProps = {
  artifacts: ReleaseArtifact[];
  compact?: boolean;
};

export function ArtifactList({ artifacts, compact = false }: ArtifactListProps) {
  return (
    <div className={compact ? "artifact-list compact" : "artifact-list"}>
      {artifacts.map((artifact) => (
        <article className="artifact-card" key={artifact.id}>
          <div className="artifact-copy">
            <p className="eyebrow">{artifact.eyebrow}</p>
            <h3>{artifact.title}</h3>
            <p>{artifact.description}</p>
            <dl className="meta-grid">
              <div>
                <dt>Date</dt>
                <dd>{artifact.date}</dd>
              </div>
              <div>
                <dt>Pages</dt>
                <dd>{artifact.pages}</dd>
              </div>
              <div>
                <dt>Radioactiveness</dt>
                <dd>{artifact.radioactiveness}</dd>
              </div>
            </dl>
          </div>
          <a className="button-link" href={artifact.href} target="_blank" rel="noreferrer">
            Open PDF
          </a>
        </article>
      ))}
    </div>
  );
}
