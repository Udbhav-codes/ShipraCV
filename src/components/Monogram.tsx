export function Monogram({ className = "" }: { className?: string }) {
  return (
    <span className={`monogram ${className}`} aria-hidden="true">
      S<span className="monogram__t">T</span>
    </span>
  );
}
