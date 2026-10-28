import { ArrowUpRight } from "lucide-react";
import { profile } from "../content/site";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <div className="container contact__inner">
        <Reveal as="header" className="contact__head">
          <p className="label">Contact · Start a conversation</p>
          <h2 id="contact-title" className="contact__title">
            Have something <em>worth communicating?</em>
          </h2>
          <p className="contact__invite">
            If you are a recruiter, editor, content team or communications professional, I would be glad to hear from
            you, whether about an opening, a small writing task or simply a conversation.
          </p>
          <a className="button button--light" href={`mailto:${profile.email}`}>
            Email Shipra
            <ArrowUpRight aria-hidden="true" size={18} strokeWidth={1.5} className="arrow-link__icon arrow-link__icon--diag" />
          </a>
        </Reveal>

        <Reveal as="dl" className="contact__details" delay={120}>
          <div>
            <dt className="label">Email</dt>
            <dd>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </dd>
          </div>
          <div>
            <dt className="label">Phone</dt>
            <dd>
              <a href={`tel:${profile.phoneHref}`}>{profile.phoneDisplay}</a>
            </dd>
          </div>
          <div>
            <dt className="label">Based in</dt>
            <dd>{profile.location}</dd>
          </div>
          {profile.linkedin && (
            <div>
              <dt className="label">LinkedIn</dt>
              <dd>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                  View profile
                </a>
              </dd>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
