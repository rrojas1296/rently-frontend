import { useForm } from "react-hook-form";
import {
  tenantsContractInformationControls,
  tenantsContractInformationSchema,
  type TenantsContractInformationSchema,
} from "@/modules/tenants/schemas/tenantsContractInformation.schema";
import { useTranslation } from "react-i18next";
import { zodResolver } from "@hookform/resolvers/zod";
import FormField from "@/shared/components/FormField/FormField";
import { Link } from "react-router";
import { Button } from "rently-components";
import { useTenantsStore } from "../../store/useTenantsStore";
import useCreateTenant from "../../hooks/useCreateTenant";
import type { CreateTenantDto } from "../../dtos/CreateTenant.dto";
import { LoaderIcon } from "lucide-react";
import useGetAvailableProperties from "@/modules/properties/hooks/useGetAvailableProperties";

const TenantsContractInformationForm = () => {
  const { t } = useTranslation();
  const { form } = useTenantsStore();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(tenantsContractInformationSchema),
  });
  const { mutate } = useCreateTenant();

  const { data, isPending } = useGetAvailableProperties();

  const properties = data?.map((p) => ({
    value: p.id,
    label: p.name,
  }));

  const handleRegisterTenant = (data: TenantsContractInformationSchema) => {
    const body: CreateTenantDto = {
      ...form!.step1,
      ...form!.step2,
      ...data,
    };
    console.log({ body });
    mutate(body);
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
          ({
            name,
            label,
            placeholder,
            type,
            required,
            disablePast,
            disableFuture,
          }) => {
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
                disableFuture={disableFuture}
                disablePast={disablePast}
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
            {isPending && <LoaderIcon className="animate-spin h-5 w-5" />}
            {t("NewTenant.contractInformation.buttons.finish")}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default TenantsContractInformationForm;
