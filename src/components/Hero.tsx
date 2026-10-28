import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "../router";
import { portrait } from "../content/site";
import { Monogram } from "./Monogram";

const HEADLINE = [
  ["Words with", false],
  ["purpose.", true],
  ["Stories with", false],
  ["clarity.", true],
] as const;

export function Hero() {
  const [imageFailed, setImageFailed] = useState(false);
  const src = `${import.meta.env.BASE_URL}${portrait.src}`;

  return (
    <section className="hero container" aria-labelledby="hero-title">
      <div className="hero__text">
        <p className="label hero__eyebrow anim-fade" style={{ "--i": 0 } as React.CSSProperties}>
          <span>The Editorial Desk</span>
          <span className="hero__eyebrow-sub">A personal space for words, ideas &amp; communication</span>
        </p>

        <h1 id="hero-title" className="hero__title">
          {HEADLINE.map(([text, emphasis], i) => (
            <span className="hero__line" key={text}>
              <span
                className={`hero__line-inner${emphasis ? " is-emphasis" : ""}`}
                style={{ "--i": i + 1 } as React.CSSProperties}
              >
                {text}{" "}
              </span>
            </span>
          ))}
        </h1>

        <p className="hero__intro anim-fade" style={{ "--i": 5 } as React.CSSProperties}>
          I'm Shipra Tiwari, an English Literature graduate interested in content writing, editorial storytelling, and
          professional communication.
        </p>

        <div className="hero__actions anim-fade" style={{ "--i": 6 } as React.CSSProperties}>
          <Link to="/#work" className="button button--primary">
            Explore Selected Work
            <ArrowRight aria-hidden="true" size={18} strokeWidth={1.5} className="arrow-link__icon" />
          </Link>
          <Link to="/#contact" className="button button--secondary">
            Get in Touch
          </Link>
        </div>

        <p className="label hero__tags anim-fade" style={{ "--i": 7 } as React.CSSProperties}>
          Content · Editorial · Communications
        </p>
      </div>

      <figure className="hero__figure anim-fade" style={{ "--i": 3 } as React.CSSProperties}>
        <div className="portrait">
          {imageFailed ? (
            <div className="portrait__fallback" role="img" aria-label={`${portrait.caption} (portrait to be added)`}>
              <Monogram className="monogram--large" />
            </div>
          ) : (
            <img
              src={src}
              alt={portrait.alt}
              width={1280}
              height={960}
              style={{ objectPosition: portrait.focus }}
              fetchPriority="high"
              onError={() => setImageFailed(true)}
            />
          )}
        </div>
        <figcaption className="label portrait__caption">{portrait.caption}</figcaption>
      </figure>
    </section>
  );
}
