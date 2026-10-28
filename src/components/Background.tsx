import { careerInterests, education, skillGroups, workingHabits } from "../content/site";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";

export function Background() {
  return (
    <section id="about" className="section background container" aria-labelledby="about-title">
      <SectionHeader id="about-title" kicker="About · Education & skills" title={<>The <em>background</em></>}>
        <p>
          A degree spent reading closely, researching, writing and presenting, across literature, political science
          and history.
        </p>
      </SectionHeader>

      <div className="background__grid">
        <Reveal as="div" className="education">
          <h3 className="label">Education</h3>
          <p className="education__institution">{education.institution}</p>
          <p className="education__university">{education.university}</p>
          <dl className="education__details">
            <div>
              <dt className="label">Degree</dt>
              <dd>{education.degree}</dd>
            </div>
            <div>
              <dt className="label">Subjects</dt>
              <dd>{education.subjects}</dd>
            </div>
            <div>
              <dt className="label">Location</dt>
              <dd>{education.place}</dd>
            </div>
            {education.graduationYear && (
              <div>
                <dt className="label">Graduated</dt>
                <dd>{education.graduationYear}</dd>
              </div>
            )}
            {education.score && (
              <div>
                <dt className="label">Result</dt>
                <dd>{education.score}</dd>
              </div>
            )}
          </dl>

          {education.additional.length > 0 && (
            <div className="education__additional">
              <h3 className="label">Activities &amp; projects</h3>
              <ul>
                {education.additional.map((item) => (
                  <li key={item.title}>
                    <strong>{item.title}</strong>
                    <span>{item.detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Reveal>

        <div className="skills">
          <h3 className="label skills__heading">Skills</h3>
          {skillGroups.map((group, i) => (
            <Reveal as="section" key={group.title} className="skill-group" delay={i * 80}>
              <h4 className="skill-group__title">{group.title}</h4>
              <ul className="skill-group__list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          ))}
          <Reveal className="skills__habits">
            <p className="label">Working habits</p>
            <p>{workingHabits.join(" · ")}</p>
          </Reveal>
        </div>
      </div>

      <Reveal className="interests">
        <p className="label">Career interests</p>
        <ul>
          {careerInterests.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
