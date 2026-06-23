import type { ReleaseItem } from "@/lib/release-data";

export function ReleaseList({ items }: { items: ReleaseItem[] }) {
  return (
    <div className="release-list">
      {items.map((item) => (
        <article className="release-row" key={item.href}>
          <div>
            <div className="eyebrow">{item.tag}</div>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
          <div className="release-actions">
            <span>{item.score}</span>
            <a href={item.href} target="_blank" rel="noreferrer">
              Open PDF
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}
