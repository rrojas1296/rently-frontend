import Card from "@/modules/dashboard/components/Card/Card";
import { useTranslation } from "react-i18next";

const stats = [
  {
    id: 1,
    value: "30",
    title: "Properties.stats.total.title",
    subtitle: "Properties.stats.total.subtitle",
  },
  {
    id: 2,
    value: "20",
    title: "Properties.stats.available.title",
    subtitle: "Properties.stats.available.subtitle",
  },
  {
    id: 3,
    value: "10",
    title: "Properties.stats.occupied.title",
    subtitle: "Properties.stats.occupied.subtitle",
  },
  {
    id: 4,
    value: "10",
    title: "Properties.stats.maintenance.title",
    subtitle: "Properties.stats.maintenance.subtitle",
  },
];
const PropertiesStats = () => {
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

export default PropertiesStats;
