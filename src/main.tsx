import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/young-serif/400.css";
import "@fontsource-variable/work-sans/index.css";
import "./styles/tokens.css";
import "./styles/base.css";
import "./styles/header.css";
import "./styles/hero.css";
import "./styles/work.css";
import "./styles/approach.css";
import "./styles/background.css";
import "./styles/contact.css";
import "./styles/article.css";
import App from "./App";

// Reveal animations only apply when JavaScript is running, so content is never hidden without it.
document.documentElement.classList.add("js");

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
