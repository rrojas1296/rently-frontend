import { BuildingIcon, CalendarIcon } from "lucide-react";
import { cn } from "../../../common/utils/cn";
import dayjs from "dayjs";
import { useTranslation } from "react-i18next";
import "dayjs/locale/es";
import "dayjs/locale/en";

interface Props {
  id: number;
  tenantName: string;
  apartment: string;
  paymentDate: string;
  amount: string;
  status: string;
}
const NextPaymentCard = ({
  id,
  tenantName,
  apartment,
  paymentDate,
  amount,
  status,
}: Props) => {
  const { i18n } = useTranslation();
  const locale = i18n.language;
  const formats: Record<string, string> = {
    es: "D [de] MMMM [del] YYYY",
    en: "MMMM D, YYYY",
  };
  const statusStyles = {
    ON_TIME: "bg-success",
    OVERDUE: "bg-danger",
    PENDING: "bg-warning",
  };
  //Format date like 22 de octubre del 2026
  const formattedDate = dayjs(paymentDate)
    .locale(locale)
    .format(formats[locale]);
  return (
    <div
      key={id}
      className={cn(
        "flex justify-between overflow-hidden items-center rounded-lg bg-bg-2 py-3 px-6 relative",
      )}
    >
      <div
        className={cn(
          "absolute top-0 left-0 w-2 h-full",
          statusStyles[status as keyof typeof statusStyles],
        )}
      />
      <div className="flex flex-col gap-2">
        <h1 className="font-semibold text-base">{tenantName}</h1>
        <p className="text-text-2 gap-2 flex items-center">
          <BuildingIcon className="w-5 h-5" />
          <span className="text-sm">{apartment}</span>
        </p>
        <p className="text-text-2 gap-2 flex items-center">
          <CalendarIcon className="w-5 h-5" />
          <span className="text-sm">{formattedDate}</span>
        </p>
      </div>
      <p className="font-semibold text-lg">{amount}</p>
    </div>
  );
};

export default NextPaymentCard;
