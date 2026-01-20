import { PlusIcon, UsersIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { Button } from "rently-components";

const NoTenantsMessage = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const handleCreateTenant = () => navigate("/tenants/new");
  return (
    <div className="w-full h-full grid place-items-center animate-fade-in">
      <div className="flex flex-col gap-3 items-center max-w-85">
        <div className="w-12 h-12 border border-border-2 rounded-lg grid place-items-center">
          <UsersIcon className="w-6 h-6 text-text-1" />
        </div>
        <h1 className="text-xl font-semibold text-center text-text-1">
          {t("NoTenantsMessage.title")}
        </h1>
        <p className="text-text-2 text-sm text-center">
          {t("NoTenantsMessage.description")}
        </p>
        <Button variant="outlined" onClick={handleCreateTenant}>
          <PlusIcon className="w-5 h-5" />
          {t("NoTenantsMessage.button")}
        </Button>
      </div>
    </div>
  );
};

export default NoTenantsMessage;
