import { profile } from "../content/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="site-footer__tagline">The Editorial Desk — a personal space for words, ideas &amp; communication.</p>
        <a href="#main" className="site-footer__top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0 }); }}>
          Back to top
        </a>
      </div>
    </footer>
  );
}
