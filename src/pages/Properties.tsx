import dayjs from "dayjs";
import { useTranslation } from "react-i18next";
import { dateFormats, type Language } from "../constants/dateFormats";
import { Button, Input } from "rently-components";
import { Building2Icon, FilterIcon, PlusIcon, SearchIcon } from "lucide-react";
import { propertiesMock } from "../data/properties";
import PropertyCard from "../modules/properties/components/PropertyCard";
import { Link } from "react-router";
import FiltersColumn from "../modules/properties/components/FiltersColumn";
import { useMemo, useState } from "react";
import { cn } from "../modules/common/utils/cn";
import type { PropertyFilters } from "../modules/properties/types/Filters.interface";
import NoProperties from "../modules/properties/components/NoProperties";

const PropertiesPage = () => {
  const { t, i18n } = useTranslation();
  const [showFiltersColumn, setShowFiltersColumn] = useState(false);
  const [filters, setFilters] = useState<PropertyFilters>({
    status: "all",
    rooms: "all",
    bathrooms: "all",
    currency: "all",
    price: "",
  });
  const locale = i18n.language;
  const formattedDate = dayjs()
    .locale(locale)
    .format(dateFormats[locale as Language]);

  const properties = useMemo(() => {
    return propertiesMock.filter((property) => {
      return (
        (property.status === filters.status || filters.status === "all") &&
        (property.rooms.toString() === filters.rooms ||
          filters.rooms === "all") &&
        (property.bathrooms.toString() === filters.bathrooms ||
          filters.bathrooms === "all") &&
        (property.currency === filters.currency ||
          filters.currency === "all") &&
        (property.price >= parseInt(filters.price) || filters.price === "")
      );
    });
  }, [filters]);

  return propertiesMock.length > 0 ? (
    <div className="animate-fade-in">
      <div className="flex flex-col gap-1 mb-5 lg:hidden">
        <h1 className="text-text-1 font-bold text-2xl">
          {t("Properties.title")}
        </h1>
        <p className="text-text-2 text-sm">{formattedDate}</p>
      </div>
      <div className="flex gap-5 mb-5 justify-between">
        <div className="flex gap-5 w-full lg:w-fit">
          <Input
            placeholder="Buscar propiedad"
            containerClassName="w-full lg:w-sm"
            Icon={SearchIcon}
          />
          <Button
            onClick={() => {
              setShowFiltersColumn((prev) => {
                if (prev)
                  setFilters({
                    status: "all",
                    rooms: "all",
                    bathrooms: "all",
                    currency: "all",
                    price: "",
                  });
                return !prev;
              });
            }}
            variant="outlined"
            className={cn(
              "text-text-2 hidden lg:flex",
              showFiltersColumn && "text-primary-400 border-primary-400",
            )}
          >
            <FilterIcon className="w-5 h-5" />
            {t("Properties.searchAndFilters.filters")}
          </Button>
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
      <FiltersColumn
        show={showFiltersColumn}
        filters={filters}
        setFilters={setFilters}
      />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 4xl:grid-cols-5 5xl:grid-cols-6">
        {properties.map((property) => (
          <PropertyCard property={property} key={property.id} />
        ))}
      </div>
    </div>
  ) : (
    <NoProperties />
  );
};

export default PropertiesPage;
