import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import RootLayout from "./app/layout.tsx";
import GomgomeeRouter from "./router/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RootLayout>
      <GomgomeeRouter />
    </RootLayout>
  </StrictMode>,
);
