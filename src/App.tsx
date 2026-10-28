import { useEffect, useRef } from "react";
import { useLocation, useScrollOnNavigate } from "./router";
import { findPublished } from "./content/writing";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { ArticlePage } from "./pages/ArticlePage";
import { NotFoundPage } from "./pages/NotFoundPage";

const BASE_TITLE = "Shipra Tiwari — English Literature Graduate | Content & Communications";

export default function App() {
  const { path, hash } = useLocation();
  const mainRef = useRef<HTMLElement>(null);
  const firstRender = useRef(true);

  useScrollOnNavigate(path, hash);

  const slugMatch = /^\/work\/([^/]+)$/.exec(path);
  const sample = slugMatch ? findPublished(decodeURIComponent(slugMatch[1])) : undefined;

  let view: "home" | "article" | "notfound" = "notfound";
  if (path === "/") view = "home";
  else if (sample) view = "article";

  useEffect(() => {
    document.title =
      view === "home"
        ? BASE_TITLE
        : view === "article" && sample
          ? `${sample.title} — Shipra Tiwari`
          : "Page not found — Shipra Tiwari";
  }, [view, sample]);

  // Move keyboard/screen-reader focus to the new page when the route changes.
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    if (!hash) mainRef.current?.focus({ preventScroll: true });
  }, [path, hash]);

  return (
    <>
      <a className="skip-link" href="#main" onClick={(e) => { e.preventDefault(); mainRef.current?.focus(); }}>
        Skip to content
      </a>
      <Header />
      <main id="main" ref={mainRef} tabIndex={-1} className="page" key={path}>
        {view === "home" && <HomePage />}
        {view === "article" && sample && <ArticlePage sample={sample} />}
        {view === "notfound" && <NotFoundPage />}
      </main>
      <Footer />
    </>
  );
}
