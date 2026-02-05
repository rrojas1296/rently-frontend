import {
  Button,
  DatePicker,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "rently-components";
import {
  type TenantNationality,
  type TenantStatus,
} from "../../types/Tenant.interface";
import { useTranslation } from "react-i18next";
import { TENANT_NATIONALITY_LABELS } from "../../../../data/tenants";
import type { Language } from "@/shared/constants/dateFormats";
import { useMemo } from "react";
import { XIcon } from "lucide-react";
import { cn } from "@/shared/utils/cn";
import {
  TenantNationalityEnum,
  TenantStatusEnum,
} from "../../types/Tenants.enum";
import { useTenantsFilters } from "../../store/useTenantsFilters";

interface Props {
  showFilters: boolean;
}

const buildingOptions = [
  {
    label: "Edificio 1",
    value: "1",
  },
  {
    label: "Edificio 2",
    value: "2",
  },
  {
    label: "Edificio 3",
    value: "3",
  },
  {
    label: "Edificio 4",
    value: "4",
  },
  {
    label: "Edificio 5",
    value: "5",
  },
];

const TenantsColumnFilters = ({ showFilters }: Props) => {
  const { t, i18n } = useTranslation();
  const locale = i18n.language as Language;
  const { filters, setFilters } = useTenantsFilters();
  const nationalityOptions = useMemo(() => {
    return Object.keys(TENANT_NATIONALITY_LABELS).map((key) => ({
      value: TenantNationalityEnum[key as TenantNationality],
      label: TENANT_NATIONALITY_LABELS[key as TenantNationality][locale],
    }));
  }, [locale]);

  if (!showFilters) return null;

  return (
    <div
      className={cn(
        "p-5 lg:flex gap-5 overflow-hidden items-end bg-bg-1 border-border-2 rounded-lg border mt-5 hidden",
      )}
    >
      <div className="flex flex-col gap-2">
        <span className="text-sm text-text-1">
          {t("Tenants.filtersColumn.status.label")}
        </span>
        <Select
          value={filters.status}
          onValueChange={(val: TenantStatus) =>
            setFilters({ ...filters, status: val })
          }
        >
          <SelectTrigger className="w-45">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">
              {t("Tenants.filtersColumn.status.options.all")}
            </SelectItem>
            <SelectItem value={TenantStatusEnum.PAID}>
              {t("Tenants.filtersColumn.status.options.paid")}
            </SelectItem>
            <SelectItem value={TenantStatusEnum.DUE_SOON}>
              {t("Tenants.filtersColumn.status.options.dueSoon")}
            </SelectItem>
            <SelectItem value={TenantStatusEnum.PENDING}>
              {t("Tenants.filtersColumn.status.options.pending")}
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-sm text-text-1">
          {t("Tenants.filtersColumn.building.label")}
        </span>
        <Select
          value={filters.building}
          onValueChange={(val) => setFilters({ ...filters, building: val })}
        >
          <SelectTrigger className="w-45">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">
              {t("Tenants.filtersColumn.building.options.all")}
            </SelectItem>
            {buildingOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-sm text-text-1">
          {t("Tenants.filtersColumn.nationality.label")}
        </span>
        <Select
          value={filters.nationality}
          onValueChange={(val: TenantNationality) =>
            setFilters({ ...filters, nationality: val })
          }
        >
          <SelectTrigger className="w-45">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">
              {t("Tenants.filtersColumn.nationality.options.all")}
            </SelectItem>
            {nationalityOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-sm text-text-1">Fecha de ingreso</span>
        <DatePicker
          date={filters.entryDate}
          placeholder="01-02-2000"
          className="w-45 min-w-0"
          setDate={(date) => {
            setFilters({
              ...filters,
              entryDate: date,
            });
          }}
        />
      </div>
      {filters.status !== "all" ||
      filters.building !== "all" ||
      filters.nationality !== "all" ||
      filters.entryDate ? (
        <Button
          variant="outlined"
          className="border-danger text-danger"
          onClick={() => {
            setFilters({
              status: "all",
              building: "all",
              nationality: "all",
              entryDate: undefined,
            });
          }}
        >
          <XIcon className="w-5 h-5" />
          {t("Tenants.filtersColumn.clearFilters")}
        </Button>
      ) : null}
    </div>
  );
};

export default TenantsColumnFilters;
