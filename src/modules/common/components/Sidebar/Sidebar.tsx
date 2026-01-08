import { cn } from "../../utils/cn";
import { useSidebar } from "../../../../store/useSidebar";
import {
  BanknoteIcon,
  BoltIcon,
  Building2Icon,
  FileChartColumnIncreasingIcon,
  LayoutDashboardIcon,
  UsersIcon,
  WrenchIcon,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router";
import { useNavigate } from "react-router";

const options = [
  {
    id: 1,
    label: "Sidebar.options.dashboard",
    path: "/dashboard",
    icon: LayoutDashboardIcon,
  },
  {
    id: 2,
    label: "Sidebar.options.properties",
    path: "/properties",
    icon: Building2Icon,
  },
  {
    id: 3,
    label: "Sidebar.options.tenants",
    path: "/tenants",
    icon: UsersIcon,
  },
  {
    id: 4,
    label: "Sidebar.options.payments",
    path: "/payments",
    icon: BanknoteIcon,
  },
  {
    id: 5,
    label: "Sidebar.options.requests",
    path: "/requests",
    icon: WrenchIcon,
  },
  {
    id: 6,
    label: "Sidebar.options.reports",
    path: "/reports",
    icon: FileChartColumnIncreasingIcon,
  },
];

const Sidebar = () => {
  const { open, setOpen } = useSidebar();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <div
      className={cn(
        "fixed z-20 lg:sticky top-0 left-0 inset-0 transition-[width] w-full h-full lg:w-fit lg:h-screen overflow-hidden ",
        open
          ? "pointer-events-auto lg:w-72"
          : "pointer-events-none lg:pointer-events-auto lg:w-21",
      )}
    >
      <div
        className={cn(
          "absolute top-0 left-0 w-full h-full bg-overlay transition-opacity lg:hidden",
          open ? "opacity-100" : "opacity-0",
        )}
        onClick={() => setOpen(false)}
      />
      <nav
        className={cn(
          "w-72 transition-[width_translate] bg-bg-1 border-r px-5 py-4 border-border-2 h-full",
          open
            ? "translate-x-0 lg:translate-x-0"
            : "-translate-x-full lg:translate-x-0 lg:w-21",
        )}
      >
        <div className="flex items-center gap-2">
          <div className="grid place-items-center h-10 w-10 rounded-lg bg-primary-500 shrink-0">
            <BoltIcon className="w-5 h-5 text-text-3" />
          </div>
          <h1
            className={cn(
              "font-bold text-2xl text-text-1 transition-opacity",
              open ? "lg:opacity-100" : "lg:opacity-0",
            )}
          >
            {t("Sidebar.logo")}
          </h1>
        </div>
        <div className="mt-7 grid gap-1">
          <p
            className={cn(
              "text-text-2 mb-1",
              open ? "lg:opacity-100" : "lg:opacity-0",
            )}
          >
            {t("Sidebar.main")}
          </p>
          {options.map(({ label, path, icon: Icon, id }) => {
            const active = pathname.includes(path);
            return (
              <button
                key={id}
                onClick={() => {
                  setOpen(false);
                  navigate(path);
                }}
                className={cn(
                  "flex w-full text-text-2 hover:text-text-1 transition-[color] overflow-hidden items-center gap-3 h-10 px-3 rounded-lg cursor-pointer",
                  active && "bg-primary-500 font-medium text-text-3",
                  open ? "w-full" : "w-11",
                )}
              >
                <Icon className="w-5 h-5 shrink-0 stroke-[1.5px]" />
                <span
                  className={cn(
                    "font-medium transition-opacity",
                    open ? "lg:opacity-100" : "lg:opacity-0",
                  )}
                >
                  {t(label)}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
