import dayjs from "dayjs";
import { useTranslation } from "react-i18next";
import { dateFormats, type Language } from "../constants/dateFormats";
import { Button, Input } from "rently-components";
import { FilterIcon, PlusIcon, SearchIcon } from "lucide-react";
import { propertiesMock } from "../data/properties";
import PropertyCard from "../modules/properties/components/PropertyCard";
import { Link } from "react-router";

const PropertiesPage = () => {
  const { t, i18n } = useTranslation();
  const locale = i18n.language;
  const formattedDate = dayjs()
    .locale(locale)
    .format(dateFormats[locale as Language]);
  return (
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
          <Button variant="outlined" className="text-text-2 hidden lg:flex">
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
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 4xl:grid-cols-5 5xl:grid-cols-6">
        {propertiesMock.map((property) => (
          <PropertyCard property={property} key={property.id} />
        ))}
      </div>
    </div>
  );
};

export default PropertiesPage;
