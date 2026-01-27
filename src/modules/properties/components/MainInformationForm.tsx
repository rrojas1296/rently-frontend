import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import {
  mainInformationControls,
  mainInformationSchema,
  type MainInformationSchema,
} from "../schemas/mainInformation.schema";
import FormField from "@/shared/components/FormField/FormField";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "rently-components";
import { Link, useNavigate } from "react-router";
import { usePropertyStore } from "../store/usePropertyStore";

const MainInformationForm = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(mainInformationSchema),
  });
  const { setStep1 } = usePropertyStore();

  const handlerNextStep = (data: MainInformationSchema) => {
    setStep1(data);
    navigate("/properties/new/2");
  };
  return (
    <form onSubmit={handleSubmit(handlerNextStep)}>
      <h1 className="text-text-1 font-semibold text-2xl lg:hidden">
        {t("NewProperty.mainInformation.title")}
      </h1>
      <div className="grid gap-5 w-full mt-5 lg:grid-cols-2">
        {mainInformationControls.map(
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
              {t("NewProperty.mainInformation.buttons.cancel")}
            </Button>
          </Link>
          <Button variant="filled" type="submit">
            {t("NewProperty.mainInformation.buttons.next")}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default MainInformationForm;
