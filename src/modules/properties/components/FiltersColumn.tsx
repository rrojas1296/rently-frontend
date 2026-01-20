import { useTranslation } from "react-i18next";
import { Button, Input, Select } from "rently-components";
import { cn } from "../../common/utils/cn";
import {
  PropertyCurrencyEnum,
  PropertyStatusEnum,
  type PropertyCurrency,
  type PropertyStatus,
} from "../types/Property.interface";
import { XIcon } from "lucide-react";
import type { PropertyFilters } from "../types/Filters.interface";

interface Props {
  filters: PropertyFilters;
  setFilters: (filters: PropertyFilters) => void;
  showFilters: boolean;
}

const FiltersColumn = ({ filters, setFilters, showFilters }: Props) => {
  const { t } = useTranslation();

  const numberOptions = Array.from({ length: 10 }).map((_, index) => ({
    label: (index + 1).toString(),
    value: (index + 1).toString(),
  }));
  if (!showFilters) return null;
  return (
    <div
      className={cn(
        "hidden lg:flex gap-5 bg-bg-1 px-5 rounded-lg py-5 border border-border-2 items-center mb-5 flex-wrap",
      )}
    >
      <div className="flex flex-col gap-px">
        <label htmlFor="status" className="text-sm text-text-1">
          {t("Properties.filtersColumn.status.label")}
        </label>
        <Select
          placeholder={t("Properties.filtersColumn.status.placeholder")}
          className="w-44"
          value={filters.status}
          onChange={(value) =>
            setFilters({ ...filters, status: value as PropertyStatus })
          }
          options={[
            {
              label: t("Properties.filtersColumn.status.options.all"),
              value: "all",
            },
            {
              label: t("Properties.filtersColumn.status.options.available"),
              value: PropertyStatusEnum.AVAILABLE,
            },
            {
              label: t("Properties.filtersColumn.status.options.occupied"),
              value: PropertyStatusEnum.OCCUPIED,
            },
            {
              label: t("Properties.filtersColumn.status.options.maintenance"),
              value: PropertyStatusEnum.MAINTENANCE,
            },
          ]}
        />
      </div>
      <div className="flex flex-col gap-px">
        <label htmlFor="status" className="text-sm text-text-1">
          {t("Properties.filtersColumn.currency.label")}
        </label>
        <Select
          placeholder={t("Properties.filtersColumn.currency.placeholder")}
          className="w-44"
          value={filters.currency}
          onChange={(value) =>
            setFilters({ ...filters, currency: value as PropertyCurrency })
          }
          options={[
            {
              label: t("Properties.filtersColumn.currency.options.all"),
              value: "all",
            },
            {
              label: t("Properties.filtersColumn.currency.options.PEN"),
              value: PropertyCurrencyEnum.PEN,
            },
            {
              label: t("Properties.filtersColumn.currency.options.USD"),
              value: PropertyCurrencyEnum.USD,
            },
            {
              label: t("Properties.filtersColumn.currency.options.EUR"),
              value: PropertyCurrencyEnum.EUR,
            },
          ]}
        />
      </div>
      <div className="flex flex-col gap-px">
        <label htmlFor="rooms" className="text-sm text-text-1">
          {t("Properties.filtersColumn.rooms.label")}
        </label>
        <Select
          placeholder={t("Properties.filtersColumn.rooms.placeholder")}
          className="w-44"
          value={filters.rooms}
          onChange={(value) => setFilters({ ...filters, rooms: value })}
          options={[
            {
              label: t("Properties.filtersColumn.rooms.all"),
              value: "all",
            },
            ...numberOptions,
          ]}
        />
      </div>
      <div className="flex flex-col gap-px">
        <label htmlFor="bathrooms" className="text-sm text-text-1">
          {t("Properties.filtersColumn.bathrooms.label")}
        </label>
        <Select
          placeholder={t("Properties.filtersColumn.bathrooms.placeholder")}
          className="w-44"
          value={filters.bathrooms}
          onChange={(value) => setFilters({ ...filters, bathrooms: value })}
          options={[
            {
              label: t("Properties.filtersColumn.bathrooms.all"),
              value: "all",
            },
            ...numberOptions,
          ]}
        />
      </div>
      <div className="flex flex-col gap-px">
        <label htmlFor="price" className="text-sm text-text-1">
          {t("Properties.filtersColumn.price.label")}
        </label>
        <Input
          placeholder={t("Properties.filtersColumn.price.placeholder")}
          value={filters.price}
          onChange={(e) => setFilters({ ...filters, price: e.target.value })}
          className="w-48"
        />
      </div>
      {filters.status !== "all" ||
      filters.rooms !== "all" ||
      filters.bathrooms !== "all" ||
      filters.currency !== "all" ||
      filters.price !== "" ? (
        <Button
          onClick={() => {
            setFilters({
              currency: "all",
              bathrooms: "all",
              rooms: "all",
              status: "all",
              price: "",
            });
          }}
          variant="outlined"
          className="self-end border-danger text-danger"
        >
          <XIcon className="w-5 h-5" />
          {t("Properties.filtersColumn.buttons.clear")}
        </Button>
      ) : null}
    </div>
  );
};

export default FiltersColumn;
