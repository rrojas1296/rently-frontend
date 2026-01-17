import { FilterIcon, PlusIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button, Input } from "rently-components";
import { tenantsMock } from "../data/tenants";
import TenantCard from "../modules/tenants/components/TenantCard/TenantCard";
import TenantsColumnFilters from "../modules/tenants/components/TenantsColumnFilters/TenantsColumnFilters";
import { useMemo, useState } from "react";
import dayjs from "dayjs";
import type {
  TenantNationality,
  TenantStatus,
} from "../modules/tenants/types/Tenant.interface";
import { cn } from "../modules/common/utils/cn";
import { Link } from "react-router";
import { useTenantsFilters } from "../modules/tenants/store/useTenantsFilters";

export interface Filters {
  status: TenantStatus | "all";
  building: string | "all";
  nationality: TenantNationality | "all";
  entryDate?: Date;
}
const TenantsPage = () => {
  const { t } = useTranslation();
  const [showFilters, setShowFilters] = useState(false);
  const { filters } = useTenantsFilters();

  const tenants = useMemo(() => {
    return tenantsMock.filter((tenant) => {
      return (
        (filters.status === "all" || tenant.status === filters.status) &&
        (filters.nationality === "all" ||
          tenant.nationality === filters.nationality) &&
        (!filters.entryDate ||
          dayjs(tenant.entryDate).isAfter(filters.entryDate))
      );
    });
  }, [filters]);

  return (
    <div className="animate-fade-in">
      <div className="flex justify-between gap-5">
        <div className="flex gap-5 w-full lg:w-fit">
          <Input
            className="lg:min-w-sm w-full"
            placeholder={t("Tenants.searchAndFilters.search")}
          />
          <Button
            variant="outlined"
            className={cn(
              "hidden lg:flex text-text-2",
              showFilters && "border-primary-400 text-primary-400",
            )}
            onClick={() => setShowFilters((prev) => !prev)}
          >
            <FilterIcon className="w-5 h-5" />
            {t("Tenants.searchAndFilters.filters")}
          </Button>
        </div>
        <Link to="/tenants/new">
          <Button className="w-10 h-10 justify-center shrink-0 p-0 lg:w-fit lg:px-3">
            <PlusIcon className="w-5 h-5" />
            <span className="hidden lg:block">
              {t("Tenants.searchAndFilters.add")}
            </span>
          </Button>
        </Link>
      </div>
      <TenantsColumnFilters showFilters={showFilters} />
      <div className="grid gap-5 mt-5 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 5xl:grid-cols-5">
        {tenants.slice(0, 10).map((tenant) => (
          <TenantCard key={tenant.id} tenant={tenant} />
        ))}
      </div>
    </div>
  );
};

export default TenantsPage;
