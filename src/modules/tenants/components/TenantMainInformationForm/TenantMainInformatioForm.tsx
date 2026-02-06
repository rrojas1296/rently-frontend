import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  tenantMainInformationControls,
  tenantMainInformationSchema,
  type TenantMainInformationSchema,
} from "../../schemas/tenantMainInformation.schema";
import { useTranslation } from "react-i18next";
import FormField from "@/shared/components/FormField/FormField";
import { Link, useNavigate } from "react-router";
import { Button } from "rently-components";
import type { Language } from "@/shared/constants/dateFormats";
import { useTenantsStore } from "../../store/useTenantsStore";
import { tenantNationality } from "../../constants/nationality";

const TenantMainInformationForm = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { setStep1 } = useTenantsStore();
  const {
    handleSubmit,
    formState: { errors },
    control,
    register,
  } = useForm({
    resolver: zodResolver(tenantMainInformationSchema),
  });

  const handlerNextStep = (data: TenantMainInformationSchema) => {
    setStep1(data);
    navigate("/tenants/new/2");
  };
  return (
    <form onSubmit={handleSubmit(handlerNextStep)}>
      <h1 className="text-text-1 font-semibold text-2xl lg:hidden">
        {t("NewTenant.mainInformation.title")}
      </h1>
      <div className="grid gap-5 w-full mt-5 lg:grid-cols-2">
        {tenantMainInformationControls.map(
          ({
            name,
            label,
            placeholder,
            type,
            required,
            options,
            disableFuture,
          }) => {
            let optionsTranslated = options?.map((opt) => ({
              ...opt,
              label: t(opt.label),
            }));
            if (name === "nationality") {
              optionsTranslated = tenantNationality.map((opt) => ({
                value: opt.value,
                label: opt.label[i18n.language as Language],
              }));
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
                disableFuture={disableFuture}
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
