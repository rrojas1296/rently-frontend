import {
  BanknoteIcon,
  Building2Icon,
  FileChartColumnIncreasingIcon,
  LayoutDashboardIcon,
  UsersIcon,
  WrenchIcon,
} from "lucide-react";

export const sideNavigationOptions = [
  {
    label: "Sidebar.sections.main.options.dashboard",
    onClick: () => {},
    href: "/dashboard",
    Icon: LayoutDashboardIcon,
  },
  {
    label: "Sidebar.sections.main.options.properties",
    onClick: () => {},
    href: "/properties",
    Icon: Building2Icon,
  },
  {
    label: "Sidebar.sections.main.options.tenants",
    onClick: () => {},
    href: "/tenants",
    Icon: UsersIcon,
  },
  {
    label: "Sidebar.sections.main.options.payments",
    href: "/payments",
    onClick: () => {},
    Icon: BanknoteIcon,
  },
  {
    label: "Sidebar.sections.main.options.requests",
    onClick: () => {},
    href: "/requests",
    Icon: WrenchIcon,
  },
  {
    label: "Sidebar.sections.main.options.reports",
    onClick: () => {},
    href: "/reports",
    Icon: FileChartColumnIncreasingIcon,
  },
];
