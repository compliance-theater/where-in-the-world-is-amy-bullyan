import type { ReleaseArtifact } from "@/lib/releaseArtifacts";

type ArtifactListProps = {
  artifacts: ReleaseArtifact[];
  compact?: boolean;
  grouped?: boolean;
};

export function ArtifactList({ artifacts, compact = false, grouped = true }: ArtifactListProps) {
  if (!compact && grouped) {
    const groups = ["Packets", "Board Emails", "Governance Notices"] as const;
    return (
      <div className="artifact-list grouped">
        {groups.map((group) => {
          const groupArtifacts = artifacts
            .filter((artifact) => artifact.group === group)
            .sort((a, b) => {
              if (group !== "Board Emails") {
                return 0;
              }

              return a.date.localeCompare(b.date);
            });
          if (groupArtifacts.length === 0) {
            return null;
          }

          return (
            <section className="artifact-group" key={group}>
              <h2>{group}</h2>
              {groupArtifacts.map((artifact) => (
                <ArtifactCard artifact={artifact} key={artifact.id} />
              ))}
            </section>
          );
        })}
      </div>
    );
  }

  return (
    <div className={`artifact-list ${compact ? "compact" : "ordered"}`}>
      {artifacts.map((artifact) => (
        <ArtifactCard artifact={artifact} key={artifact.id} />
      ))}
    </div>
  );
}

function ArtifactCard({ artifact }: { artifact: ReleaseArtifact }) {
  return (
    <article className="artifact-card">
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
            <dt>Smell</dt>
            <dd>{artifact.smell}</dd>
          </div>
        </dl>
      </div>
      <a className="button-link" href={artifact.href} target="_blank" rel="noreferrer">
        Read PDF
      </a>
    </article>
  );
}
