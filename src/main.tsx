import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { router } from "./routes/router";
import ThemeProvider from "./provider/ThemeProvider.tsx";
import "./i18n/i18n.ts";
import "rently-components/dist/index.css";
import "./styles/index.css";
import QueryProvider from "./provider/QueryProvider.tsx";
import { ToastProvider } from "rently-components";
import ToastComponent from "./shared/components/ToastComponent/ToastComponent.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ToastProvider duration={3000}>
      <QueryProvider>
        <ThemeProvider>
          <RouterProvider router={router} />
          <ToastComponent />
        </ThemeProvider>
      </QueryProvider>
    </ToastProvider>
  </StrictMode>,
);
