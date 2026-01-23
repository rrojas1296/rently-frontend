import { createBrowserRouter, Navigate } from "react-router";
import AppLayout from "../layouts/AppLayout";
import DashboardPage from "../pages/Dashboard";
import PaymentsPage from "../pages/Payments";
import ReportsPage from "../pages/Reports";
import RequestsPage from "../pages/Requests";
import NewProperty from "../modules/properties/components/NewProperty";
import MainInformationForm from "../modules/properties/components/MainInformationForm";
import PhysicalDetailsForm from "../modules/properties/components/PhysicalDetailsForm";
import FinancialInformationForm from "../modules/properties/components/FinancialInformationForm";
import NewTenant from "../modules/tenants/components/NewTentant/NewTenant";
import TenantMainInformationForm from "../modules/tenants/components/TenantMainInformationForm/TenantMainInformatioForm";
import { lazy } from "react";
import TenantsContactInformationForm from "../modules/tenants/components/TenantsContactInformationForm/TenantsContactInformationForm";
import TenantsContractInformationForm from "../modules/tenants/components/TenantsContractInformationForm/TenantsContractInformationForm";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";
import PrivateRoute from "@/shared/guards/PrivateRoute";
import PublicRoute from "@/shared/guards/PublicRoute";

const TenantsPage = lazy(() => import("../pages/Tenants"));
const PropertiesPage = lazy(() => import("../pages/Properties"));

export const router = createBrowserRouter([
  {
    path: "login",
    element: (
      <PublicRoute>
        <LoginPage />
      </PublicRoute>
    ),
  },
  {
    path: "register",
    element: (
      <PublicRoute>
        <RegisterPage />
      </PublicRoute>
    ),
  },
  {
    element: (
      <PrivateRoute>
        <AppLayout />
      </PrivateRoute>
    ),
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
        children: [
          {
            index: true,
            element: <TenantsPage />,
          },
          {
            path: "new",
            element: <NewTenant />,
            children: [
              {
                index: true,
                element: <Navigate to="1" replace />,
              },
              {
                path: "1",
                element: <TenantMainInformationForm />,
              },
              {
                path: "2",
                element: <TenantsContactInformationForm />,
              },
              {
                path: "3",
                element: <TenantsContractInformationForm />,
              },
            ],
          },
        ],
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
