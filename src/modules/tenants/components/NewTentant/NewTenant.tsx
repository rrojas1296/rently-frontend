import { SaveIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "rently-components";
import {
  createTenantSchema,
  createTenantsSections,
  type CreateTenantSchema,
} from "../../schemas/createTenant.schema";
import FormField from "@/shared/components/FormField/FormField";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useGetAvailableProperties from "@/modules/properties/hooks/useGetAvailableProperties";
import { Link } from "react-router";
import useCreateTenant from "../../hooks/useCreateTenant";
import { tenantNationality } from "../../constants/nationality";
import type { Language } from "@/shared/constants/dateFormats";

const NewTenant = () => {
  const { t, i18n } = useTranslation();
  const { mutate } = useCreateTenant();
  const language = i18n.language;
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createTenantSchema),
    defaultValues: {
      phone: "+51",
    },
  });
  const { data } = useGetAvailableProperties();
  const nationality = watch("nationality");

  const properties = data?.map((p) => ({
    value: p.id,
    label: p.name,
  }));

  const createTenant = (data: CreateTenantSchema) => {
    mutate(data);
  };
  return (
    <form
      className="animate-fade-in lg:h-full"
      onSubmit={handleSubmit(createTenant)}
    >
      <div className="flex justify-between items-start mb-5">
        <div className="flex flex-col gap-px">
          <h1 className="text-text-1 font-semibold text-2xl">
            {t("NewTenant.title")}
          </h1>
          <p className="text-sm text-text-2">{t("NewTenant.description")}</p>
        </div>
        <Button type="submit" className="hidden lg:flex">
          <SaveIcon className="w-5 h-5 text-text-3" />
          {t("NewTenant.buttons.save")}
        </Button>
      </div>
      <div className="flex flex-col gap-8">
        {createTenantsSections.map(({ id, title, controls }) => {
          return (
            <div key={id}>
              <h1 className="text-lg text-text-1 mb-5">{t(title)}</h1>
              <div className="grid gap-5 md:grid-cols-2">
                {controls.map(
                  ({
                    className,
                    label,
                    name,
                    type,
                    required,
                    options,
                    placeholder,
                  }) => {
                    const opts =
                      name === "nationality"
                        ? tenantNationality.map((n) => ({
                            label: n.label[language as Language],
                            value: n.value,
                          }))
                        : options?.map((o) => ({
                            ...o,
                            label: t(o.label),
                          }));
                    const error = errors[name]?.message;
                    if (name === "other" && nationality !== "other")
                      return null;
                    return (
                      <FormField
                        key={name}
                        className={className}
                        label={t(label)}
                        placeholder={placeholder && t(placeholder)}
                        type={type}
                        required={required}
                        options={name === "property" ? properties : opts}
                        error={error && t(error)}
                        control={control}
                        {...register(name, {
                          valueAsNumber: type === "number",
                        })}
                      />
                    );
                  },
                )}
              </div>
            </div>
          );
        })}
        <div className="flex justify-between">
          <Link to="/tenants">
            <Button className="flex bg-bg-1" variant="outlined">
              {t("NewTenant.buttons.back")}
            </Button>
          </Link>
          <Button type="submit" className="flex">
            <SaveIcon className="w-5 h-5 text-text-3" />
            {t("NewTenant.buttons.save")}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default NewTenant;
