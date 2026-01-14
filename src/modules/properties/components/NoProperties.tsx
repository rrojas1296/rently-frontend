import { Building2Icon, PlusIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { Button } from "rently-components";

const NoProperties = () => {
  const { t } = useTranslation();
  return (
    <div className="animate-fade-in w-full h-full grid place-items-center">
      <div className="flex flex-col gap-3 items-center max-w-md">
        <div className="w-12 h-12 border border-border-2 rounded-lg grid place-items-center">
          <Building2Icon className="w-6 h-6 text-text-1" />
        </div>
        <h1 className="text-xl font-semibold text-center">
          {t("Properties.noProperties.title")}
        </h1>
        <p className="text-center text-sm text-text-2">
          {t("Properties.noProperties.description")}
        </p>
        <Link to="/properties/new">
          <Button variant="outlined">
            <PlusIcon className="w-5 h-5" />
            {t("Properties.noProperties.add")}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NoProperties;
