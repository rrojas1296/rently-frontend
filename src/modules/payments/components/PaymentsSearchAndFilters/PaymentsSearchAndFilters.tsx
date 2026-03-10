import type { IPaymentsFilters } from "@/pages/Payments";
import type { Dispatch, SetStateAction } from "react";
import { useTranslation } from "react-i18next";
import {
  Button,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "rently-components";
import useGetPaymentsFilters from "../../hooks/useGetPaymentsFilters";
import { PropertyCurrencyEnum } from "@/modules/properties/types/Property.interface";
import { PaymentMethodEnum } from "../../types/payments.types";
import { FilterIcon, PlusIcon } from "lucide-react";
import { Link } from "react-router";

interface Props {
  filters: IPaymentsFilters;
  setFilters: Dispatch<SetStateAction<IPaymentsFilters>>;
}
const PaymentsSearchAndFilters = ({ filters, setFilters }: Props) => {
  const { t } = useTranslation();
  const { data } = useGetPaymentsFilters();
  const tenants = data?.data.tenants || [];
  const properties = data?.data.properties || [];
  return (
    <div className="flex justify-between items-end w-full">
      <div className="hidden lg:flex flex-wrap gap-5 w-fit">
        <div className="flex flex-col gap-2">
          <label htmlFor="tenant" className="text-sm text-text-1">
            {t("Payments.searchAndFilters.tenant.label")}
          </label>
          <Select
            value={filters.tenant}
            onValueChange={(val) => setFilters({ ...filters, tenant: val })}
          >
            <SelectTrigger className="w-45">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">
                {t("Payments.searchAndFilters.tenant.all")}
              </SelectItem>
              {tenants.map((t) => (
                <SelectItem key={t.id} value={t.id}>
                  {t.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="property" className="text-sm text-text-1">
            {t("Payments.searchAndFilters.property.label")}
          </label>
          <Select
            value={filters.property}
            onValueChange={(val) => setFilters({ ...filters, property: val })}
          >
            <SelectTrigger className="w-45">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">
                {t("Payments.searchAndFilters.property.all")}
              </SelectItem>
              {properties.map((p) => (
                <SelectItem key={p.id} value={p.id}>
                  {p.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="currency" className="text-sm text-text-1">
            {t("Payments.searchAndFilters.currency.label")}
          </label>
          <Select
            value={filters.currency}
            onValueChange={(val) => setFilters({ ...filters, currency: val })}
          >
            <SelectTrigger className="w-45">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">
                {t("Payments.searchAndFilters.property.all")}
              </SelectItem>
              <SelectItem value={PropertyCurrencyEnum.PEN}>
                {t("Payments.searchAndFilters.currency.pen")}
              </SelectItem>
              <SelectItem value={PropertyCurrencyEnum.EUR}>
                {t("Payments.searchAndFilters.currency.eur")}
              </SelectItem>
              <SelectItem value={PropertyCurrencyEnum.USD}>
                {t("Payments.searchAndFilters.currency.usd")}
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="currency" className="text-sm text-text-1">
            {t("Payments.searchAndFilters.paymentMethod.label")}
          </label>
          <Select
            value={filters.paymentMethod}
            onValueChange={(val) =>
              setFilters({ ...filters, paymentMethod: val })
            }
          >
            <SelectTrigger className="w-45">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">
                {t("Payments.searchAndFilters.paymentMethod.all")}
              </SelectItem>
              <SelectItem value={PaymentMethodEnum.CASH}>
                {t("Payments.searchAndFilters.paymentMethod.cash")}
              </SelectItem>
              <SelectItem value={PaymentMethodEnum.TRANSFER}>
                {t("Payments.searchAndFilters.paymentMethod.transfer")}
              </SelectItem>
              <SelectItem value={PaymentMethodEnum.YAPE}>
                {t("Payments.searchAndFilters.paymentMethod.yape")}
              </SelectItem>
              <SelectItem value={PaymentMethodEnum.PLIN}>
                {t("Payments.searchAndFilters.paymentMethod.plin")}
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex gap-5 w-full lg:w-fit">
        <Button
          className="flex-1 bg-bg-1 hover:bg-bg-2 lg:hidden"
          variant="outlined"
        >
          <FilterIcon className="h-5 w-5" />
          {t("Payments.searchAndFilters.filters")}
        </Button>
        <Link to="/payments/new">
          <Button className="flex-1 whitespace-nowrap">
            <PlusIcon className="h-5 w-5 " />
            {t("Payments.searchAndFilters.save")}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default PaymentsSearchAndFilters;
