import { Badge, Button, type BadgeType } from "rently-components";
import type { IProperty, PropertyStatus } from "../types/Property.interface";
import { EllipsisVertical } from "lucide-react";
import { useTranslation } from "react-i18next";
import { cn } from "@/shared/utils/cn";

interface Props {
  property: IProperty;
}
const PropertyCard = ({ property }: Props) => {
  const { t } = useTranslation();
  const {
    name,
    status,
    address,
    rooms,
    bathrooms,
    area,
    monthlyPayment,
    currency,
    tenantName,
  } = property;

  const state: Record<PropertyStatus, BadgeType> = {
    AVAILABLE: "success",
    OCCUPIED: "error",
    MAINTENANCE: "warning",
  };
  return (
    <div
      className={cn(
        "rounded-lg border border-border-2 bg-bg-1 p-5 overflow-hidden",
        tenantName && "p-0",
      )}
    >
      <div className={cn(tenantName && "px-5 pt-5")}>
        <div className="flex justify-between items-start mb-3">
          <div className="flex flex-col gap-px">
            <h2 className="font-semibold text-lg">{name}</h2>
            <p className="text-text-2 text-sm">{address}</p>
          </div>
          <Button variant="icon" className="bg-bg-1 hover:bg-bg-2">
            <EllipsisVertical className="w-5 h-5" />
          </Button>
        </div>
        <Badge
          type={state[status]}
          text={t(`Properties.propertyCard.states.${status.toLowerCase()}`)}
        />

        <div className="w-full h-px bg-border-2 my-4" />
        <div className="text-text-2 flex gap-4 text-sm">
          <span>
            {rooms} {t("Properties.propertyCard.rooms")}
          </span>
          <span>
            {bathrooms} {t("Properties.propertyCard.bathrooms")}
          </span>
          <span>
            {area} {t("Properties.propertyCard.area")}
          </span>
        </div>
        <div className="w-full h-px bg-border-2 my-4" />

        <div className="flex flex-col gap-px">
          <h1 className="text-sm text-text-2">
            {t("Properties.propertyCard.price")}
          </h1>
          <p className="font-bold text-3xl">
            {monthlyPayment}
            <span> {currency}</span>
          </p>
        </div>
      </div>
      {tenantName && (
        <div className="border-t border-t-border-2 bg-bg-2 px-5 h-10 flex items-center mt-4">
          <p>
            <span className="text-text-2 text-sm">
              {t("Properties.propertyCard.tenantName")}
            </span>
            <span className="font-bold text-text-1 text-sm">{tenantName}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default PropertyCard;
