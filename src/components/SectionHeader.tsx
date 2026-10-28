import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface SectionHeaderProps {
  id: string;
  kicker: string;
  title: ReactNode;
  children?: ReactNode;
}

/** Editorial section opener: a small kicker above a large serif heading, with optional standfirst. */
export function SectionHeader({ id, kicker, title, children }: SectionHeaderProps) {
  return (
    <Reveal as="header" className="section-header">
      <p className="label section-header__kicker">{kicker}</p>
      <h2 id={id} className="section-header__title">
        {title}
      </h2>
      {children && <div className="section-header__intro">{children}</div>}
    </Reveal>
  );
}
