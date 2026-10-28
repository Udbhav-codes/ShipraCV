import {
  useEffect,
  useSyncExternalStore,
  type AnchorHTMLAttributes,
  type MouseEvent,
} from "react";

/**
 * A deliberately tiny History-API router (no dependency).
 * Routes: "/", "/work/<slug>", anything else renders the 404 page.
 * Netlify serves index.html for every path (see netlify.toml).
 */

const NAV_EVENT = "app:navigate";

export function navigate(to: string) {
  window.history.pushState({}, "", to);
  window.dispatchEvent(new Event(NAV_EVENT));
}

function subscribe(callback: () => void) {
  window.addEventListener("popstate", callback);
  window.addEventListener(NAV_EVENT, callback);
  return () => {
    window.removeEventListener("popstate", callback);
    window.removeEventListener(NAV_EVENT, callback);
  };
}

const snapshot = () => window.location.pathname + window.location.hash;

export function useLocation() {
  const full = useSyncExternalStore(subscribe, snapshot, () => "/");
  const hashIndex = full.indexOf("#");
  const path = (hashIndex === -1 ? full : full.slice(0, hashIndex)).replace(/\/+$/, "") || "/";
  const hash = hashIndex === -1 ? "" : full.slice(hashIndex + 1);
  return { path, hash };
}

export function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Scrolls to the hash target, or to the top when there is none. */
export function useScrollOnNavigate(path: string, hash: string) {
  useEffect(() => {
    const behavior: ScrollBehavior = prefersReducedMotion() ? "auto" : "smooth";
    if (hash) {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior, block: "start" });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [path, hash]);
}

interface LinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  to: string;
}

export function Link({ to, onClick, children, ...rest }: LinkProps) {
  const handle = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }
    event.preventDefault();
    if (to !== snapshot()) navigate(to);
    else window.dispatchEvent(new Event(NAV_EVENT));
  };
  return (
    <a href={to} onClick={handle} {...rest}>
      {children}
    </a>
  );
}
