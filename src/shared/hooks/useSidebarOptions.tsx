import { useTranslation } from "react-i18next";
import { sideNavigationOptions } from "@/shared/constants/sideNavigationOptions";
import { useLocation, useNavigate } from "react-router";
import { useMemo, useCallback } from "react";
import { useSidebar } from "./useSidebar";

const useSidebarOptions = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { setOpen } = useSidebar();

  const handleNavigate = useCallback(
    (href: string) => {
      setOpen(false);
      navigate(href, { replace: true });
    },
    [navigate, setOpen],
  );

  const options = useMemo(() => {
    return sideNavigationOptions.map((item) => ({
      ...item,
      label: t(item.label),
      onClick: () => handleNavigate(item.href),
    }));
  }, [t, handleNavigate]);

  const sections = useMemo(() => {
    return [
      {
        id: 1,
        title: t("Sidebar.sections.main.title"),
        options,
      },
    ];
  }, [t, options]);

  return {
    sections,
    pathname,
  };
};

export default useSidebarOptions;
