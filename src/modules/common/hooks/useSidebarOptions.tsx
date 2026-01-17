import { useTranslation } from "react-i18next";
import { sideNavigationOptions } from "../../../constants/sideNavigationOptions";
import { useLocation, useNavigate } from "react-router";
import { useSidebar } from "../../../store/useSidebar";
import { useMemo, useCallback } from "react";

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
