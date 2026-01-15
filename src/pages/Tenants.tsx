import { FilterIcon, PlusIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button, Input } from "rently-components";
import { tenantsMock } from "../data/tenants";
import TenantCard from "../modules/tenants/components/TenantCard/TenantCard";

const TenantsPage = () => {
  const { t } = useTranslation();
  return (
    <div className="animate-fade-in">
      <div className="flex justify-between gap-5">
        <div className="flex gap-5 w-full lg:w-fit">
          <Input
            containerClassName="lg:min-w-sm w-full"
            placeholder={t("Tenants.searchAndFilters.search")}
          />
          <Button variant="outlined" className="hidden lg:flex">
            <FilterIcon className="w-5 h-5" />
            {t("Tenants.searchAndFilters.filters")}
          </Button>
        </div>
        <Button className="w-10 h-10 justify-center shrink-0 p-0 lg:w-fit lg:px-3">
          <PlusIcon className="w-5 h-5" />
          <span className="hidden lg:block">
            {t("Tenants.searchAndFilters.add")}
          </span>
        </Button>
      </div>
      <div className="grid gap-5 mt-5 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 5xl:grid-cols-5">
        {tenantsMock.map((tenant) => (
          <TenantCard key={tenant.email} tenant={tenant} />
        ))}
      </div>
    </div>
  );
};

export default TenantsPage;
