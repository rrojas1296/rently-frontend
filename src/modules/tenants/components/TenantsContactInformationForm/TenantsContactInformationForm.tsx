import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import FormField from "../../../common/components/FormField/FormField";
import { Link, useNavigate } from "react-router";
import { Button } from "rently-components";
import {
  tenantContactInformationSchema,
  tenantsContactInformationControls,
  type TenantsContactInformationSchema,
} from "../../schemas/tenantsContactInformation.schema";
import { zodResolver } from "@hookform/resolvers/zod";

const TenantsContactInformationForm = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: zodResolver(tenantContactInformationSchema),
    defaultValues: {
      phone: "+51",
      emergencyPhone: "+51",
    },
  });

  const handlerNextStep = (data: TenantsContactInformationSchema) => {
    navigate("/tenants/new/3");
    console.log({ data });
  };
  return (
    <form onSubmit={handleSubmit(handlerNextStep)}>
      <h1 className="text-text-1 font-semibold text-2xl lg:hidden">
        {t("NewTenant.contactInformation.title")}
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
              {t("NewTenant.contactInformation.buttons.back")}
            </Button>
          </Link>
          <Button variant="filled" type="submit">
            {t("NewTenant.contactInformation.buttons.next")}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default TenantsContactInformationForm;
