import { Hero } from "../components/Hero";
import { WorkIndex } from "../components/WorkIndex";
import { Approach } from "../components/Approach";
import { Background } from "../components/Background";
import { Contact } from "../components/Contact";

export function HomePage() {
  return (
    <>
      <Hero />
      <WorkIndex />
      <Approach />
      <Background />
      <Contact />
    </>
  );
}
