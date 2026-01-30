import { useTranslation } from "react-i18next";
import {
  Button,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "rently-components";
import { cn } from "@/shared/utils/cn";
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
      <div className="flex flex-col gap-2">
        <span className="text-sm text-text-1">
          {t("Properties.filtersColumn.status.label")}
        </span>
        <Select
          value={filters.status}
          onValueChange={(val: PropertyStatus | "all") =>
            setFilters({ ...filters, status: val })
          }
        >
          <SelectTrigger className="w-45">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">
              {t("Properties.filtersColumn.status.options.all")}
            </SelectItem>
            <SelectItem value={PropertyStatusEnum.AVAILABLE}>
              {t("Properties.filtersColumn.status.options.available")}
            </SelectItem>
            <SelectItem value={PropertyStatusEnum.OCCUPIED}>
              {t("Properties.filtersColumn.status.options.occupied")}
            </SelectItem>
            <SelectItem value={PropertyStatusEnum.MAINTENANCE}>
              {t("Properties.filtersColumn.status.options.maintenance")}
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-sm text-text-1">
          {t("Properties.filtersColumn.currency.label")}
        </span>
        <Select
          value={filters.currency}
          onValueChange={(val: PropertyCurrency | "all") =>
            setFilters({ ...filters, currency: val })
          }
        >
          <SelectTrigger className="w-45">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">
              {t("Properties.filtersColumn.currency.options.all")}
            </SelectItem>
            <SelectItem value={PropertyCurrencyEnum.PEN}>
              {t("Properties.filtersColumn.currency.options.PEN")}
            </SelectItem>
            <SelectItem value={PropertyCurrencyEnum.USD}>
              {t("Properties.filtersColumn.currency.options.USD")}
            </SelectItem>
            <SelectItem value={PropertyCurrencyEnum.EUR}>
              {t("Properties.filtersColumn.currency.options.EUR")}
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-sm text-text-1">
          {t("Properties.filtersColumn.rooms.label")}
        </span>
        <Select
          value={filters.rooms}
          onValueChange={(val) => setFilters({ ...filters, rooms: val })}
        >
          <SelectTrigger className="w-45">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">
              {t("Properties.filtersColumn.rooms.all")}
            </SelectItem>
            {numberOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-sm text-text-1">
          {t("Properties.filtersColumn.bathrooms.label")}
        </span>
        <Select
          value={filters.bathrooms}
          onValueChange={(val) => setFilters({ ...filters, bathrooms: val })}
        >
          <SelectTrigger className="w-45">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">
              {t("Properties.filtersColumn.bathrooms.all")}
            </SelectItem>
            {numberOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-sm text-text-1">
          {t("Properties.filtersColumn.price.label")}
        </span>
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
