import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "../router";
import { navLinks, profile } from "../content/site";
import { Monogram } from "./Monogram";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="site-header__ribbon">
        <p className="container label site-header__status">{profile.availability}</p>
      </div>

      <div className="container site-header__bar">
        <Link to="/" className="wordmark" aria-label={`${profile.name}, home`} onClick={() => setOpen(false)}>
          <Monogram />
          <span className="wordmark__name">{profile.name}</span>
        </Link>

        <nav aria-label="Primary" className="nav-desktop">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="nav-link">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="menu-button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span>{open ? "Close" : "Menu"}</span>
          {open ? <X aria-hidden="true" size={18} strokeWidth={1.5} /> : <Menu aria-hidden="true" size={18} strokeWidth={1.5} />}
        </button>
      </div>

      <nav id="mobile-menu" aria-label="Mobile" className={`nav-mobile${open ? " is-open" : ""}`} hidden={!open}>
        <ul className="container">
          {navLinks.map((link, i) => (
            <li key={link.to}>
              <Link to={link.to} className="nav-mobile__link" onClick={() => setOpen(false)}>
                <span className="label">0{i + 1}</span>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
