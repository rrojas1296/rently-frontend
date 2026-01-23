import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { router } from "./routes/router";
import ThemeProvider from "./provider/ThemeProvider.tsx";
import "./i18n/i18n.ts";
import "rently-components/dist/index.css";
import "./styles/index.css";
import QueryProvider from "./provider/QueryProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryProvider>
  </StrictMode>,
);
