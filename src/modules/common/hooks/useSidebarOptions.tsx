import { useTranslation } from "react-i18next";
import { sideNavigationOptions } from "../../../constants/sideNavigationOptions";
import { useLocation, useNavigate } from "react-router";
import { useSidebar } from "../../../store/useSidebar";

const useSidebarOptions = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { setOpen } = useSidebar();
  const options = sideNavigationOptions.map((item) => ({
    ...item,
    label: t(item.label),
    onClick: () => {
      navigate(item.href);
      setOpen(false);
    },
  }));
  const sections = [
    {
      id: 1,
      title: t("Sidebar.sections.main.title"),
      options,
    },
  ];
  return {
    sections,
    pathname,
  };
};

export default useSidebarOptions;
