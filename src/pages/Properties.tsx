import dayjs from "dayjs";
import { useTranslation } from "react-i18next";
import { dateFormats, type Language } from "@/shared/constants/dateFormats";
import { Button, Input } from "rently-components";
import { PlusIcon, SearchIcon } from "lucide-react";
import PropertyCard from "../modules/properties/components/PropertyCard";
import { Link } from "react-router";
import FiltersColumn from "../modules/properties/components/FiltersColumn";
import { useState } from "react";
import NoProperties from "../modules/properties/components/NoProperties";
import Loading from "@/shared/components/Loading/Loading";
import { useDebounce } from "@/shared/hooks/useDebounce";
import Pagination from "@/shared/components/Pagination/Pagination";
import useProperties from "@/shared/hooks/usePagination";
import PropertiesStats from "@/modules/properties/components/PropertiesStats";

const PropertiesPage = () => {
  const { t, i18n } = useTranslation();
  const locale = i18n.language;
  const formattedDate = dayjs()
    .locale(locale)
    .format(dateFormats[locale as Language]);

  const [search, setSearch] = useState("");
  const debounceSearch = useDebounce(search, 500);

  const {
    hasProperties,
    properties,
    filters,
    setFilters,
    setPage,
    page,
    totalPages,
    isFetching,
  } = useProperties({
    debounceSearch,
  });

  if (isFetching) {
    return <Loading className="static w-fll h-full bg-bg-2" />;
  }

  return hasProperties && !isFetching ? (
    <div className="animate-fade-in">
      <div className="flex flex-col gap-1 mb-5 lg:hidden">
        <h1 className="text-text-1 font-bold text-2xl">
          {t("Properties.title")}
        </h1>
        <p className="text-text-2 text-sm">{formattedDate}</p>
      </div>
      <PropertiesStats />
      <div className="flex gap-5 mb-5 items-end justify-between">
        <div className="flex flex-1 flex-col gap-2">
          <label className="text-sm text-text-1">
            {t("Properties.searchAndFilters.labelSearch")}
          </label>
          <Input
            placeholder="Buscar propiedad"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full lg:w-sm"
            Icon={SearchIcon}
          />
        </div>
        <Link to="/properties/new">
          <Button
            variant="filled"
            className="w-10 h-10 justify-center lg:w-fit"
          >
            <PlusIcon className="w-5 h-5" />
            <span className="hidden lg:block whitespace-nowrap font-medium">
              {t("Properties.searchAndFilters.add")}
            </span>
          </Button>
        </Link>
      </div>
      <FiltersColumn filters={filters} setFilters={setFilters} />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 4xl:grid-cols-5 5xl:grid-cols-6">
        {properties.map((property) => (
          <PropertyCard property={property} key={property.id} />
        ))}
      </div>
      <Pagination totalPages={totalPages} page={page} setPage={setPage} />
    </div>
  ) : (
    <NoProperties />
  );
};

export default PropertiesPage;
