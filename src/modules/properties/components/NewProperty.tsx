import { useTranslation } from "react-i18next";
import { Outlet, useLocation } from "react-router";
import { Stepper, type Step } from "rently-components";

const steps: Step[] = [
  {
    label: "NewProperty.steps.mainInformation",
  },
  {
    label: "NewProperty.steps.physicalDetails",
  },
  {
    label: "NewProperty.steps.financialInformation",
  },
];

const NewProperty = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const currentStep = Number(pathname.split("/").pop()) - 1;
  return (
    <div className="animate-fade-in lg:h-full lg:grid lg:place-items-center">
      <div className="lg:max-w-3xl w-full">
        <div className="flex flex-col gap-px">
          <h1 className="text-text-1 font-semibold text-2xl lg:text-center">
            {t("NewProperty.title")}
          </h1>
          <p className="text-sm text-text-2 lg:text-center">
            {t("NewProperty.description")}
          </p>
        </div>
        <Stepper
          steps={steps.map((s) => ({ label: t(s.label) }))}
          currentStep={currentStep}
          labelClassName="hidden lg:block"
          className="my-8 lg:w-9/12 lg:mx-auto"
        />
        <div className="lg:pt-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default NewProperty;
