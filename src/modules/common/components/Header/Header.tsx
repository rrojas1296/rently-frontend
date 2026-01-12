import {
  BellIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  MenuIcon,
  MoonIcon,
  SunIcon,
} from "lucide-react";
import { DEFAULT_USER_IMAGE } from "../../../../constants/defaults";
import { useTranslation } from "react-i18next";
import { useSidebar } from "../../../../store/useSidebar";
import { useThemeStore } from "../../../../store/useTheme";
import { useLocation } from "react-router";
import dayjs from "dayjs";
import { Button } from "rently-components";

const Header = () => {
  const { t, i18n } = useTranslation();
  const locale = i18n.language;
  const { pathname } = useLocation();
  const headerTitle = `Header.title.${pathname.split("/")[1]}`;
  const { setTheme, theme } = useThemeStore();
  const { setOpen, open: openSidebar } = useSidebar();

  const formats: Record<string, string> = {
    es: "D [de] MMMM [del] YYYY",
    en: "MMMM D, YYYY",
  };

  const formattedDate = dayjs().locale(locale).format(formats[locale]);
  return (
    <div className="sticky z-10 top-0 left-0 h-18 lg:h-20 bg-bg-1 flex items-center justify-between px-5 lg:px-6 border-b border-border-2">
      <Button
        variant="icon"
        className="lg:hidden"
        onClick={() => setOpen(true)}
      >
        <MenuIcon className="w-5 h-5" />
      </Button>
      <div className="hidden lg:flex lg:items-center gap-4">
        <Button
          variant="icon"
          className="cursor-pointer"
          onClick={() => setOpen(!openSidebar)}
        >
          {openSidebar ? (
            <ChevronLeftIcon className="w-5 h-5" />
          ) : (
            <ChevronRightIcon className="w-5 h-5" />
          )}
        </Button>
        <div className="flex flex-col gap-1">
          <h1 className="text-text-1 font-bold text-2xl">{t(headerTitle)}</h1>
          <p className="text-text-2 text-sm">{formattedDate}</p>
        </div>
      </div>
      <span className="text-2xl font-bold text-text-1 lg:hidden">
        {t("Header.logo")}
      </span>
      <div className="flex items-center gap-4">
        <Button variant="icon" className="hidden lg:flex">
          <BellIcon className="w-5 h-5" />
        </Button>
        <Button
          variant="icon"
          className="hidden lg:flex"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? (
            <MoonIcon className="w-5 h-5" />
          ) : (
            <SunIcon className="w-5 h-5" />
          )}
        </Button>
        <img
          src={DEFAULT_USER_IMAGE}
          alt="User profile"
          className="w-10 h-10 rounded-lg object-cover"
        />
      </div>
    </div>
  );
};

export default Header;
