import { Badge, Button, type BadgeType } from "rently-components";
import dayjs from "dayjs";
import type { ITenant, TenantStatus } from "../../types/Tenant.interface";
import { CalendarIcon, EllipsisVerticalIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { TENANT_NATIONALITY_LABELS } from "../../../../data/tenants";
import type { Language } from "../../../../constants/dateFormats";

interface Props {
  tenant: ITenant;
}
const TenantCard = ({ tenant }: Props) => {
  const { t, i18n } = useTranslation();
  const locale = i18n.language as Language;
  const {
    name,
    apartmentName,
    status,
    email,
    phone,
    curreny,
    entryDate,
    nationality,
    monthlyPayment,
    imageUrl,
  } = tenant;
  const nameInitials = name
    .split(" ")
    .map((w) => w[0])
    .splice(0, 2)
    .join("")
    .toUpperCase();
  const badgeTypes: Record<TenantStatus, BadgeType> = {
    OVERDUE: "error",
    PAID: "success",
  };
  return (
    <div className="p-5 bg-bg-1 border-border-2 border rounded-lg flex flex-col gap-4">
      <div className="flex justify-between items-start">
        <div className="flex items-start gap-2">
          {imageUrl ? (
            <img
              src={imageUrl}
              className="w-10.5 h-10.5 rounded-lg object-cover"
              alt="User profile"
            />
          ) : (
            <div className="shrink-0 rounded-lg bg-bg-2 border border-border-2 flex items-center h-10.5 w-10.5 justify-center text-lg text-text-2 font-bold">
              {nameInitials}
            </div>
          )}
          <div className="flex flex-col gap-px">
            <h1 className="font-bold text-text-1 text-base">{name}</h1>
            <p className="text-text-2 text-sm">{apartmentName}</p>
          </div>
        </div>
        <Button variant="icon">
          <EllipsisVerticalIcon className="w-5 h-5" />
        </Button>
      </div>
      <Badge
        type={badgeTypes[status]}
        text={t(`Tenants.tenantsCard.status.${status.toLowerCase()}`)}
      />
      <hr className="w-full text-border-2" />
      <div className="grid grid-cols-12 text-sm gap-y-2">
        <span className="text-text-2 col-span-5">
          {t("Tenants.tenantsCard.information.nationality")}
        </span>
        <span className="col-span-7">
          {TENANT_NATIONALITY_LABELS[nationality][locale]}
        </span>
        <span className="text-text-2 col-span-5">
          {t("Tenants.tenantsCard.information.email")}
        </span>
        <span className="col-span-7 truncate">{email}</span>
        <span className="text-text-2 col-span-5">
          {t("Tenants.tenantsCard.information.phone")}
        </span>
        <span className="col-span-7">{phone}</span>
      </div>
      <hr className="w-full text-border-2" />
      <div className="flex flex-col gap-px text-sm">
        <p className="text-text-2">{t("Tenants.tenantsCard.entryDate")}</p>
        <p className="flex gap-2 items-center">
          <CalendarIcon className="w-5 h-5 text-text-2" />
          <span> {dayjs(entryDate).locale(locale).format("DD-MM-YYYY")}</span>
        </p>
      </div>
      <hr className="w-full text-border-2" />
      <div className="flex flex-col gap-px">
        <p className="text-sm text-text-2">
          {t("Tenants.tenantsCard.monthlyPayment")}
        </p>
        <p className="text-text-1 font-bold text-3xl flex gap-2">
          <span> {monthlyPayment}</span>
          <span> {curreny}</span>
        </p>
      </div>
    </div>
  );
};

export default TenantCard;
