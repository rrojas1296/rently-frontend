import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  tenantMainInformationControls,
  tenantMainInformationSchema,
  type TenantMainInformationSchema,
} from "../../schemas/tenantMainInformation.schema";
import { useTranslation } from "react-i18next";
import FormField from "../../../common/components/FormField/FormField";
import { Link, useNavigate } from "react-router";
import { Button } from "rently-components";
import { TENANT_NATIONALITY_LABELS } from "../../../../data/tenants";
import { TenantNationalityEnum } from "../../types/Tenants.enum";
import type { TenantNationality } from "../../types/Tenant.interface";
import type { Language } from "../../../../constants/dateFormats";

const TenantMainInformationForm = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const {
    handleSubmit,
    formState: { errors },
    control,
    register,
  } = useForm({
    resolver: zodResolver(tenantMainInformationSchema),
  });

  const handlerNextStep = (data: TenantMainInformationSchema) => {
    console.log({ data });
    navigate("/tenants/new/2");
  };
  return (
    <form onSubmit={handleSubmit(handlerNextStep)}>
      <h1 className="text-text-1 font-semibold text-2xl lg:hidden">
        {t("NewTenant.mainInformation.title")}
      </h1>
      <div className="grid gap-5 w-full mt-5 lg:grid-cols-2">
        {tenantMainInformationControls.map(
          ({ name, label, placeholder, type, required, options }) => {
            let optionsTranslated = options?.map((opt) => ({
              ...opt,
              label: t(opt.label),
            }));
            if (name === "nationality") {
              optionsTranslated = Object.keys(TENANT_NATIONALITY_LABELS).map(
                (key) => ({
                  value: TenantNationalityEnum[key as TenantNationality],
                  label:
                    TENANT_NATIONALITY_LABELS[key as TenantNationality][
                      i18n.language as Language
                    ],
                }),
              );
            }

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

export default TenantMainInformationForm;
