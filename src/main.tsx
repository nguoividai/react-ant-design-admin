import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./presentation/shared/styles/main.css";
import "./i18n";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
