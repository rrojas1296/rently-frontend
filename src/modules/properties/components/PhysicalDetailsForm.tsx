import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  physicalDetailsControls,
  physicalDetailsSchema,
  type PhysicalDetailsSchema,
} from "../schemas/physicalDetails.schema";
import { useTranslation } from "react-i18next";
import FormField from "../../common/components/FormField/FormField";
import { Link, useNavigate } from "react-router";
import { Button } from "rently-components";

const PhysicalDetailsForm = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const {
    handleSubmit,
    formState: { errors },
    register,
    control,
  } = useForm({
    resolver: zodResolver(physicalDetailsSchema),
    defaultValues: {
      furnished: false,
      pets: false,
    },
  });

  const handlerNextStep = (data: PhysicalDetailsSchema) => {
    console.log({ data });
    navigate("/properties/new/3");
  };

  return (
    <form onSubmit={handleSubmit(handlerNextStep)}>
      <h1 className="text-text-1 font-semibold text-2xl lg:hidden">
        {t("NewProperty.mainInformation.title")}
      </h1>
      <div className="grid gap-5 w-full mt-5 lg:grid-cols-2">
        {physicalDetailsControls.map(
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
          <Link to="/properties/new/1">
            <Button variant="ghost" type="button">
              {t("NewProperty.physicalDetails.buttons.back")}
            </Button>
          </Link>
          <Button variant="filled" type="submit">
            {t("NewProperty.physicalDetails.buttons.next")}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default PhysicalDetailsForm;
