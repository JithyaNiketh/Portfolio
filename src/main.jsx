
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";

import App from "./App";
import "./styles/globals.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        smoothWheel: true,
        wheelMultiplier: 1,
      }}
    >
      <App />
    </ReactLenis>
  </StrictMode>
);
