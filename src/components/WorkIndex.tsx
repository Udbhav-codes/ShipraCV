import { categories, publishedSamples, samples } from "../content/writing";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { SampleEntry } from "./SampleEntry";

export function WorkIndex() {
  const hasOwnWork = publishedSamples.some((s) => !s.draft);
  const hasDrafts = publishedSamples.some((s) => s.draft);
  const hasSuggestions = samples.some((s) => s.status === "placeholder");

  return (
    <section id="work" className="section work container" aria-labelledby="work-title">
      <SectionHeader id="work-title" kicker="Selected Work · Index" title={<>Selected <em>work</em></>}>
        <p>
          Four areas of writing I want to build a body of work in. Each one lists the independent samples written
          for it, and says plainly whether a piece is finished or still only an idea.
        </p>
      </SectionHeader>

      {!hasOwnWork && (
        <Reveal className="work__empty">
          <p className="label">Status</p>
          <p>
            {hasDrafts
              ? `Shipra’s own writing samples are on the way. Until then, the pieces marked “Sample draft” are illustrative placeholders${hasSuggestions ? ", and the dashed entries are suggested topics" : ""}. Each will be replaced with her own work.`
              : "No finished writing samples are published yet. The entries below are suggested directions, clearly marked as such, and will be replaced with real pieces as they are written."}
          </p>
        </Reveal>
      )}

      <div className="work__subhead">
        <h3 className="label">Independent Writing Samples</h3>
        <span className="label">Self-initiated · {samples.length} listed</span>
      </div>

      <ol className="work__index">
        {categories.map((category, i) => {
          const entries = samples.filter((s) => s.category === category.id);
          return (
            <Reveal as="li" key={category.id} className={`work-row work-row--${i % 2 === 0 ? "a" : "b"}`}>
              <span className="work-row__number" aria-hidden="true">
                {category.number}
              </span>
              <div className="work-row__head">
                <h4 className="work-row__title">
                  <span className="visually-hidden">{category.number}. </span>
                  {category.title}
                </h4>
                <p className="work-row__desc">{category.description}</p>
              </div>
              <ul className="work-row__entries">
                {entries.map((sample) => (
                  <li key={sample.slug}>
                    <SampleEntry sample={sample} />
                  </li>
                ))}
              </ul>
            </Reveal>
          );
        })}
      </ol>
    </section>
  );
}
