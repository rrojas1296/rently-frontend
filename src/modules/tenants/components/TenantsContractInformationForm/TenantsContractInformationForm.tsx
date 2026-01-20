import { useForm } from "react-hook-form";
import {
  tenantsContractInformationControls,
  tenantsContractInformationSchema,
  type TenantsContractInformationSchema,
} from "../../schemas/tenantsContractInformation.schema";
import { useTranslation } from "react-i18next";
import { zodResolver } from "@hookform/resolvers/zod";
import FormField from "../../../common/components/FormField/FormField";
import { Link } from "react-router";
import { Button } from "rently-components";
import { useMemo } from "react";
import { propertiesMock } from "../../../../data/properties";

const TenantsContractInformationForm = () => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(tenantsContractInformationSchema),
  });

  const properties = useMemo(() => {
    return propertiesMock.map((p) => ({
      label: p.name,
      value: p.id,
    }));
  }, []);

  console.log({
    form: watch(),
  });

  const handleRegisterTenant = (data: TenantsContractInformationSchema) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(handleRegisterTenant)}
      className="animate-fade-in"
    >
      <h1 className="text-text-1 font-semibold text-2xl lg:hidden">
        {t("NewTenant.contractInformation.title")}
      </h1>
      <div className="grid gap-5 w-full mt-5 lg:grid-cols-2">
        {tenantsContractInformationControls.map(
          ({ name, label, placeholder, type, required }) => {
            const errorTranslated = errors[name]?.message
              ? t(errors[name].message)
              : "";
            return (
              <FormField
                key={name}
                label={t(label)}
                type={type}
                placeholder={placeholder && t(placeholder)}
                required={required}
                options={properties}
                control={control}
                error={errorTranslated}
                {...register(name, {
                  valueAsNumber: type === "number",
                })}
              />
            );
          },
        )}

        <div className="flex justify-between items-center lg:col-span-2">
          <Link to="/tenants/new/2">
            <Button variant="ghost" type="button">
              {t("NewTenant.contractInformation.buttons.back")}
            </Button>
          </Link>
          <Button variant="filled" type="submit">
            {t("NewTenant.contractInformation.buttons.finish")}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default TenantsContractInformationForm;
