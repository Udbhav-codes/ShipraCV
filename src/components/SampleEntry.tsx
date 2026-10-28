import { ArrowRight } from "lucide-react";
import { Link } from "../router";
import { readingMinutes, type WritingSample } from "../content/writing";

/** One entry in the work index. Placeholders are static and honest; published pieces link to a reading view. */
export function SampleEntry({ sample }: { sample: WritingSample }) {
  if (sample.status === "placeholder") {
    return (
      <article className="entry entry--placeholder">
        <p className="entry__tag">Suggested · Not yet written</p>
        <h5 className="entry__title">{sample.title}</h5>
        <p className="entry__summary">{sample.summary}</p>
        <p className="entry__note">Placeholder — to be replaced with a finished piece.</p>
      </article>
    );
  }

  return (
    <article className="entry entry--published">
      <Link to={`/work/${sample.slug}`} className="entry__link" aria-label={`Read sample: ${sample.title}`}>
        <p className="entry__tag entry__tag--published">
          {sample.draft ? "Sample draft · Placeholder" : "Independent sample"} · {readingMinutes(sample)} min read
        </p>
        <h5 className="entry__title">{sample.title}</h5>
        <p className="entry__summary">{sample.summary}</p>
        {sample.excerpt && <blockquote className="entry__excerpt">“{sample.excerpt}”</blockquote>}
        <span className="arrow-link">
          Read Sample
          <ArrowRight aria-hidden="true" size={18} strokeWidth={1.5} className="arrow-link__icon" />
        </span>
      </Link>
    </article>
  );
}
