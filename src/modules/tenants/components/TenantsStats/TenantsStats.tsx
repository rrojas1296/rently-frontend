import Card from "@/modules/dashboard/components/Card/Card";
import { useTranslation } from "react-i18next";

const stats = [
  {
    id: 1,
    value: "30",
    title: "Tenants.stats.total.title",
    subtitle: "Tenants.stats.total.subtitle",
  },
  {
    id: 2,
    value: "20",
    title: "Tenants.stats.active.title",
    subtitle: "Tenants.stats.active.subtitle",
  },
  {
    id: 3,
    value: "10",
    title: "Tenants.stats.overdue.title",
    subtitle: "Tenants.stats.overdue.subtitle",
  },
  {
    id: 4,
    value: "10",
    title: "Tenants.stats.revenue.title",
    subtitle: "Tenants.stats.revenue.subtitle",
  },
];

const TenantsStats = () => {
  const { t } = useTranslation();
  return (
    <div className="grid gap-5 mb-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {stats.map(({ id, value, title, subtitle }) => {
        return (
          <Card className="text-text-1 flex flex-col gap-2" key={id}>
            <h1 className="font-medium text-lg">{t(title)}</h1>
            <p className="font-bold text-4xl">{value}</p>
            <p className="text-sm">{t(subtitle)}</p>
          </Card>
        );
      })}
    </div>
  );
};

export default TenantsStats;
