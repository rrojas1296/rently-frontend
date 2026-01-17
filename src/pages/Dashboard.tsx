import { useTranslation } from "react-i18next";
import Card from "../modules/dashboard/components/Card/Card";
import { dashboardStats, lastTenants, nextPayments } from "../data/dashboard";
import { ChevronRightIcon } from "lucide-react";
import NextPaymentCard from "../modules/dashboard/components/NextPaymentCard/NextPaymentCard";
import TenantDashboardCard from "../modules/dashboard/components/TenantDashboardCard/TenantDashboardCard";
import dayjs from "dayjs";
import { Button } from "rently-components";
import { dateFormats, type Language } from "../constants/dateFormats";
import { Link } from "react-router";

const DashboardPage = () => {
  const { t, i18n } = useTranslation();
  const locale = i18n.language;
  const formattedDate = dayjs()
    .locale(locale)
    .format(dateFormats[locale as Language]);
  return (
    <div className="animate-fade-in">
      <div className="flex flex-col gap-1 mb-5 lg:hidden">
        <h1 className="text-text-1 font-bold text-2xl">
          {t("Dashboard.title")}
        </h1>
        <p className="text-text-2 text-sm">{formattedDate}</p>
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {dashboardStats.map(({ title, value, id }) => (
          <Card className="text-text-1 flex flex-col gap-2" key={id}>
            <h1 className="font-medium text-lg">{t(title)}</h1>
            <p className="font-bold text-4xl">{value}</p>
            <p className="text-sm">{t("Dashboard.stats.lastDays")}</p>
          </Card>
        ))}
      </div>
      <div className="mt-5 flex flex-col lg:flex-row gap-5">
        <Card className="lg:w-8/12 h-90">
          <div className="flex flex-col gap-1">
            <h1 className="font-medium text-lg">
              {t("Dashboard.monthlyRevenue.title")}
            </h1>
            <p className="text-sm text-text-2">
              {t("Dashboard.monthlyRevenue.description")}
            </p>
          </div>
        </Card>
        <Card className="lg:w-4/12 h-90">
          <div className="flex flex-col gap-1">
            <h1 className="font-medium text-lg">
              {t("Dashboard.tenantsStatus.title")}
            </h1>
            <p className="text-sm text-text-2">
              {t("Dashboard.tenantsStatus.description")}
            </p>
          </div>
        </Card>
      </div>
      <div className="mt-5 flex flex-col xl:flex-row gap-5">
        <Card className="xl:w-5/12">
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-1t">
              <h1 className="font-medium text-lg">
                {t("Dashboard.nextPayments.title")}
              </h1>
              <p className="text-sm text-text-2">
                {t("Dashboard.nextPayments.description")}
              </p>
            </div>
            <Button
              variant="ghost"
              className="text-primary-400 hidden lg:flex shrink-0"
            >
              {t("Dashboard.nextPayments.showAll")}

              <ChevronRightIcon className="w-5 h-5" />
            </Button>
          </div>
          <div className="grid gap-2 mt-5">
            {nextPayments.map((payment) => (
              <NextPaymentCard key={payment.id} {...payment} />
            ))}
          </div>
        </Card>
        <Card className="xl:w-7/12">
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-1">
              <h1 className="font-medium text-lg">
                {t("Dashboard.lastTenants.title")}
              </h1>
              <p className="text-sm text-text-2">
                {t("Dashboard.lastTenants.description")}
              </p>
            </div>
            <Link to="/tenants">
              <Button
                variant="ghost"
                className="text-primary-400 hidden lg:flex"
              >
                {t("Dashboard.lastTenants.showAll")}

                <ChevronRightIcon className="w-5 h-5" />
              </Button>
            </Link>
          </div>
          <div className="grid gap-6 mt-5">
            {lastTenants.map((tenant) => (
              <TenantDashboardCard key={tenant.id} {...tenant} />
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DashboardPage;
