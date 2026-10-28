import { ArrowLeft } from "lucide-react";
import { Link } from "../router";

export function NotFoundPage() {
  return (
    <section className="notfound container" aria-labelledby="nf-title">
      <p className="label">Error 404</p>
      <h1 id="nf-title" className="notfound__title">
        This page <em>isn't on the desk.</em>
      </h1>
      <p className="notfound__copy">
        The page you were looking for may have moved, or the link may be mistyped.
      </p>
      <Link to="/" className="arrow-link">
        <ArrowLeft aria-hidden="true" size={18} strokeWidth={1.5} className="arrow-link__icon arrow-link__icon--back" />
        Back to the homepage
      </Link>
    </section>
  );
}
