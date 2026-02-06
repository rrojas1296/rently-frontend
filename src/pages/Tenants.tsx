import { FilterIcon, PlusIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button, Input } from "rently-components";
import TenantCard from "../modules/tenants/components/TenantCard/TenantCard";
import TenantsColumnFilters from "../modules/tenants/components/TenantsColumnFilters/TenantsColumnFilters";
import { useMemo, useState } from "react";
import dayjs from "dayjs";
import { cn } from "@/shared/utils/cn";
import { Link } from "react-router";
import { useTenantsFilters } from "../modules/tenants/store/useTenantsFilters";
import NoTenantsMessage from "../modules/tenants/components/NoTenantsMessage/NoTenantsMessage";
import useGetTenants from "@/modules/tenants/hooks/useGetTenants";
import type { TenantStatusEnum } from "@/modules/tenants/types/Tenants.enum";
import Loading from "@/shared/components/Loading/Loading";
import Pagination from "@/shared/components/Pagination/Pagination";
import { useDebounce } from "@/shared/hooks/useDebounce";

export interface Filters {
  status: TenantStatusEnum | "all";
  building: string | "all";
  nationality: string | "all";
  entryDate?: Date;
}

const TenantsPage = () => {
  const { t } = useTranslation();
  const [showFilters, setShowFilters] = useState(false);
  const { data, isFetching } = useGetTenants();
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search);

  const limit = 12;
  const [page, setPage] = useState(0);

  const { filters } = useTenantsFilters();

  const filteredTenants = useMemo(() => {
    return (data?.tenants || []).filter((tenant) => {
      return (
        tenant.name.toLowerCase().includes(debouncedSearch.toLowerCase()) &&
        (filters.status === "all" || tenant.paymentStatus === filters.status) &&
        (filters.nationality === "all" ||
          tenant.nationality === filters.nationality) &&
        (!filters.entryDate ||
          dayjs(tenant.entryDate).isAfter(filters.entryDate))
      );
    });
  }, [filters, data, debouncedSearch]);

  const tenants = useMemo(() => {
    const offset = page * limit;
    const newData = filteredTenants.slice(offset, offset + limit);
    return newData;
  }, [filteredTenants, page]);

  const totalPages = useMemo(() => {
    return Math.ceil(filteredTenants.length / limit);
  }, [filteredTenants]);

  if (isFetching) {
    return <Loading className="static w-fll h-full bg-bg-2" />;
  }

  return data?.hasTenants && !isFetching ? (
    <div className="animate-fade-in">
      <div className="flex justify-between gap-5">
        <div className="flex gap-5 w-full lg:w-fit">
          <Input
            className="lg:min-w-sm w-full"
            placeholder={t("Tenants.searchAndFilters.search")}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
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
        <Link to="/tenants/new/1">
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
      <Pagination totalPages={totalPages} page={page} setPage={setPage} />
    </div>
  ) : (
    <NoTenantsMessage />
  );
};

export default TenantsPage;
