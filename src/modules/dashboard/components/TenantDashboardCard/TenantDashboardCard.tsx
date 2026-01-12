import { MailIcon } from "lucide-react";
import WhatsappIcon from "../../../common/components/Icons/WhatsappIcon";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useTranslation } from "react-i18next";
import { Button } from "rently-components";

dayjs.extend(relativeTime);

interface Props {
  imageUrl?: string;
  name: string;
  email: string;
  entryDate: string;
  apartment: string;
}
const TenantDashboardCard = ({
  imageUrl,
  name,
  email,
  entryDate,
  apartment,
}: Props) => {
  const { i18n } = useTranslation();
  const locale = i18n.language;
  const formattedDate = dayjs(entryDate).locale(locale).fromNow();
  const nameInitials = name
    .split(" ")
    .map((word) => word[0])
    .splice(0, 2)
    .join("");
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-3 items-center">
        {imageUrl ? (
          <img
            className="rounded-lg overflow-hidden object-cover h-10.5 w-10.5"
            src={imageUrl}
            alt="UserImage"
          />
        ) : (
          <div className="h-10.5 w-10.5 rounded-lg bg-bg-2 border border-border-2 grid place-items-center">
            {nameInitials}
          </div>
        )}
        <div className="flex flex-col gap-1 w-36">
          <h1 className="font-medium text-base text-text-1">{name}</h1>
          <p className="text-sm text-text-2 wrap-break-word ">{email}</p>
        </div>
      </div>
      <p className="text-sm text-text-1 hidden lg:block">{formattedDate}</p>
      <p className="text-sm text-text-1 hidden lg:block">{apartment}</p>
      <div className="flex gap-3">
        <Button variant="icon">
          <MailIcon className="w-5 h-5" />
        </Button>
        <Button variant="icon">
          <WhatsappIcon className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};

export default TenantDashboardCard;
