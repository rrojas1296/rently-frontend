import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  financialInformationControls,
  financialInformationSchema,
  type FinancialInformationSchema,
} from "../schemas/financialInformation.schema";
import { useTranslation } from "react-i18next";
import FormField from "@/shared/components/FormField/FormField";
import { Link } from "react-router";
import { Button } from "rently-components";
import useCreateProperty from "../hooks/useCreateProperty";
import { usePropertyStore } from "../store/usePropertyStore";
import type { CreatePropertyDto } from "../dtos/createProperty.dto";

const FinancialInformationForm = () => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(financialInformationSchema),
  });
  const { form } = usePropertyStore();
  const { mutate } = useCreateProperty();
  const handlerNextStep = (data: FinancialInformationSchema) => {
    const body: CreatePropertyDto = {
      ...form!.step1,
      ...form!.step2,
      ...data,
    };
    console.log({ body });
    mutate(body);
  };
  return (
    <form onSubmit={handleSubmit(handlerNextStep)}>
      <h1 className="text-text-1 font-semibold text-2xl lg:hidden">
        {t("NewProperty.mainInformation.title")}
      </h1>
      <div className="grid gap-5 w-full mt-5 lg:grid-cols-2">
        {financialInformationControls.map(
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
          <Link to="/properties/new/2">
            <Button variant="ghost" type="button">
              {t("NewProperty.financialInformation.buttons.back")}
            </Button>
          </Link>
          <Button variant="filled" type="submit">
            {t("NewProperty.financialInformation.buttons.finish")}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default FinancialInformationForm;
