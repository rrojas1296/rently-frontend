import Card from "@/modules/dashboard/components/Card/Card";
import { useTranslation } from "react-i18next";

const stats = [
  {
    id: 1,
    value: "2000 PEN",
    title: "Payments.stats.total.title",
    subtitle: "Payments.stats.total.subtitle",
  },
  {
    id: 2,
    value: "20",
    title: "Payments.stats.pending.title",
    subtitle: "Payments.stats.pending.subtitle",
  },
  {
    id: 3,
    value: "10",
    title: "Payments.stats.overdue.title",
    subtitle: "Payments.stats.overdue.subtitle",
  },
  {
    id: 4,
    value: "1250 PEN",
    title: "Payments.stats.revenue.title",
    subtitle: "Payments.stats.revenue.subtitle",
  },
];

const PaymentsStats = () => {
  const { t } = useTranslation();
  return (
    <div className="grid gap-5 mb-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {stats.map(({ title, subtitle, value, id }) => (
        <Card className="text-text-1 flex flex-col gap-2" key={id}>
          <h1 className="font-medium text-lg">{t(title)}</h1>
          <p className="font-bold text-4xl">{value}</p>
          <p className="text-sm">{t(subtitle)}</p>
        </Card>
      ))}
    </div>
  );
};

export default PaymentsStats;
