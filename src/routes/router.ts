import { createBrowserRouter } from "react-router";
import AppLayout from "../layouts/AppLayout";
import DashboardPage from "../pages/Dashboard";
import TenantsPage from "../pages/Tenants";
import PaymentsPage from "../pages/Payments";
import ReportsPage from "../pages/Reports";
import RequestsPage from "../pages/Requests";
import PropertiesPage from "../pages/Properties";

export const router = createBrowserRouter([
  {
    Component: AppLayout,
    path: "/",
    children: [
      {
        index: true,
        path: "/dashboard",
        Component: DashboardPage,
      },
      {
        path: "/tenants",
        Component: TenantsPage,
      },
      {
        path: "/properties",
        Component: PropertiesPage,
      },
      {
        path: "/payments",
        Component: PaymentsPage,
      },
      {
        path: "/requests",
        Component: RequestsPage,
      },
      {
        path: "/reports",
        Component: ReportsPage,
      },
    ],
  },
]);
