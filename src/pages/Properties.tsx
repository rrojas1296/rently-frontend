import dayjs from "dayjs";
import { useTranslation } from "react-i18next";
import { dateFormats, type Language } from "../constants/dateFormats";
import { Button, Input } from "rently-components";
import { PlusIcon, SearchIcon } from "lucide-react";
import { propertiesMock } from "../data/properties";
import PropertyCard from "../modules/properties/components/PropertyCard";

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
      <div className="flex gap-5 mb-5">
        <Input
          placeholder="Buscar propiedad"
          containerClassName="w-full"
          Icon={SearchIcon}
        />
        <Button
          variant="icon"
          className="bg-primary-500 hover:bg-primary-400 text-text-3"
        >
          <PlusIcon className="w-5 h-5" />
        </Button>
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
