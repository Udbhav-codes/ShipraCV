import { ArrowLeft } from "lucide-react";
import { Link } from "../router";
import { categoryOf, readingMinutes, type PublishedSample } from "../content/writing";

export function ArticlePage({ sample }: { sample: PublishedSample }) {
  const category = categoryOf(sample.category);
  const minutes = readingMinutes(sample);

  return (
    <article className="article container" aria-labelledby="article-title">
      <Link to="/#work" className="arrow-link article__back">
        <ArrowLeft aria-hidden="true" size={18} strokeWidth={1.5} className="arrow-link__icon arrow-link__icon--back" />
        Back to selected work
      </Link>

      <header className="article__header">
        <p className="label">
          {category.number} · {category.title}
        </p>
        <h1 id="article-title" className="article__title">
          {sample.title}
        </h1>
        <p className="article__intro">{sample.intro}</p>
        <p className="label article__meta">
          <span>{minutes} min read</span>
          {sample.context && <span>{sample.context}</span>}
          {!sample.draft && <span>By Shipra Tiwari</span>}
        </p>
        {sample.draft && (
          <p className="article__draft">
            <strong>Sample draft.</strong> Illustrative writing, shown as a placeholder until Shipra’s own pieces are
            added. Not her published work.
          </p>
        )}
      </header>

      <div className="article__body">
        {sample.body.map((block, i) => {
          if (block.type === "h2") return <h2 key={i}>{block.text}</h2>;
          if (block.type === "quote") return <blockquote key={i}>{block.text}</blockquote>;
          if (block.type === "card") {
            return (
              <section className="card" key={i} aria-label={block.label}>
                <p className="label card__label">{block.label}</p>
                <div className="card__page">
                  {block.heading && <h3 className="card__heading">{block.heading}</h3>}
                  {block.paragraphs.map((text, j) => (
                    <p key={j}>{text}</p>
                  ))}
                  {block.signoff && (
                    <p className="card__signoff">
                      {block.signoff.map((line) => (
                        <span key={line}>{line}</span>
                      ))}
                    </p>
                  )}
                </div>
                {block.note && (
                  <p className="card__note">
                    <span className="label">Who it’s for</span> {block.note}
                  </p>
                )}
              </section>
            );
          }
          return <p key={i}>{block.text}</p>;
        })}
      </div>

      <footer className="article__footer">
        <Link to="/#work" className="arrow-link">
          <ArrowLeft aria-hidden="true" size={18} strokeWidth={1.5} className="arrow-link__icon arrow-link__icon--back" />
          Back to selected work
        </Link>
      </footer>
    </article>
  );
}
