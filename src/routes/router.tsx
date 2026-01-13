import { createBrowserRouter, Navigate } from "react-router";
import AppLayout from "../layouts/AppLayout";
import DashboardPage from "../pages/Dashboard";
import TenantsPage from "../pages/Tenants";
import PaymentsPage from "../pages/Payments";
import ReportsPage from "../pages/Reports";
import RequestsPage from "../pages/Requests";
import PropertiesPage from "../pages/Properties";
import NewProperty from "../modules/properties/components/NewProperty";
import MainInformationForm from "../modules/properties/components/MainInformationForm";
import PhysicalDetailsForm from "../modules/properties/components/PhysicalDetailsForm";
import FinancialInformationForm from "../modules/properties/components/FinancialInformationForm";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard" replace />,
      },
      {
        path: "dashboard",
        element: <DashboardPage />,
      },
      {
        path: "tenants",
        element: <TenantsPage />,
      },
      {
        path: "properties",
        children: [
          {
            index: true,
            element: <PropertiesPage />,
          },
          {
            path: "new",
            element: <NewProperty />,
            children: [
              {
                index: true,
                element: <Navigate to="1" replace />,
              },
              {
                path: "1",
                element: <MainInformationForm />,
              },
              {
                path: "2",
                element: <PhysicalDetailsForm />,
              },
              {
                path: "3",
                element: <FinancialInformationForm />,
              },
            ],
          },
        ],
      },
      {
        path: "payments",
        element: <PaymentsPage />,
      },
      {
        path: "requests",
        element: <RequestsPage />,
      },
      {
        path: "reports",
        element: <ReportsPage />,
      },
    ],
  },
]);
