import { useTranslation } from "react-i18next";
import { sideNavigationOptions } from "../../../constants/sideNavigationOptions";
import { useLocation, useNavigate } from "react-router";

const useSidebarOptions = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const options = sideNavigationOptions.map((item) => ({
    ...item,
    label: t(item.label),
    onClick: () => navigate(item.href),
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
