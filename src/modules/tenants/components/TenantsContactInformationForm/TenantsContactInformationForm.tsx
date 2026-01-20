import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import FormField from "../../../common/components/FormField/FormField";
import { Link } from "react-router";
import { Button } from "rently-components";
import {
  tenantContactInformationSchema,
  tenantsContactInformationControls,
  type TenantsContactInformationSchema,
} from "../../schemas/tenantsContactInformation.schema";
import { zodResolver } from "@hookform/resolvers/zod";

const TenantsContactInformationForm = () => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
  } = useForm({
    resolver: zodResolver(tenantContactInformationSchema),
    defaultValues: {
      phone: "+51",
      emergencyPhone: "+51",
    },
  });

  console.log({
    form: watch(),
  });

  const handlerNextStep = (data: TenantsContactInformationSchema) => {
    console.log({ data });
  };
  return (
    <form onSubmit={handleSubmit(handlerNextStep)}>
      <h1 className="text-text-1 font-semibold text-2xl lg:hidden">
        {t("NewTenant.mainInformation.title")}
      </h1>
      <div className="grid gap-5 w-full mt-5 lg:grid-cols-2">
        {tenantsContactInformationControls.map(
          ({ name, label, placeholder, type, required, options }) => {
            const optionsTranslated = options?.map((opt) => ({
              ...opt,
              label: t(opt.label),
            }));

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
                options={optionsTranslated}
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
          <Link to="/properties">
            <Button variant="ghost" type="button">
              {t("NewTenant.mainInformation.buttons.cancel")}
            </Button>
          </Link>
          <Button variant="filled" type="submit">
            {t("NewTenant.mainInformation.buttons.next")}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default TenantsContactInformationForm;
