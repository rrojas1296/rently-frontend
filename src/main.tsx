import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { router } from "./routes/router.ts";
import ThemeProvider from "./provider/ThemeProvider.tsx";
import "./i18n/i18n.ts";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
);
