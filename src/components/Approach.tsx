import { approach } from "../content/site";
import { Reveal } from "./Reveal";

export function Approach() {
  return (
    <section id="approach" className="section approach" aria-labelledby="approach-title">
      <div className="container">
        <Reveal as="header" className="approach__head">
          <p className="label">Approach · How I think about writing</p>
          <h2 id="approach-title" className="approach__statement">
            {approach.statement}
          </h2>
        </Reveal>

        <p className="label approach__note">My proposed approach, and the standard I intend to hold my work to.</p>

        <ol className="approach__list">
          {approach.principles.map((p, i) => (
            <Reveal as="li" key={p.title} className={`principle principle--${i + 1}`} delay={i * 90}>
              <span className="principle__number" aria-hidden="true">
                0{i + 1}
              </span>
              <h3 className="principle__title">
                <span className="visually-hidden">Principle 0{i + 1}: </span>
                {p.title}
              </h3>
              <p className="principle__copy">{p.copy}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
