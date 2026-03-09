import { useTranslation } from "react-i18next";
import {
  createPropertySchema,
  createPropertySections,
  type CreatePropertySchema,
} from "../schemas/createProperty.schema";
import FormField from "@/shared/components/FormField/FormField";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "rently-components";
import { SaveIcon } from "lucide-react";
import useCreateProperty from "../hooks/useCreateProperty";
import { Link } from "react-router";

const NewProperty = () => {
  const { t } = useTranslation();
  const { mutate } = useCreateProperty();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createPropertySchema),
    defaultValues: {
      furnished: false,
      pets: false,
    },
  });

  const createProperty = (data: CreatePropertySchema) => {
    mutate(data);
  };
  return (
    <form
      onSubmit={handleSubmit(createProperty)}
      className="animate-fade-in lg:h-full"
    >
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-px mb-5">
          <h1 className="text-text-1 font-semibold text-2xl">
            {t("NewProperty.title")}
          </h1>
          <p className="text-sm text-text-2">{t("NewProperty.description")}</p>
        </div>
        <Button type="submit" className="hidden lg:flex">
          <SaveIcon className="w-5 h-5 text-text-3" />
          {t("NewProperty.buttons.save")}
        </Button>
      </div>
      <div className="flex flex-col gap-8">
        {createPropertySections.map(({ id, title, controls }) => {
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
                    const opts = options?.map((o) => ({
                      ...o,
                      label: t(o.label),
                    }));
                    const error = errors[name]?.message;
                    return (
                      <FormField
                        key={name}
                        className={className}
                        label={t(label)}
                        placeholder={placeholder && t(placeholder)}
                        type={type}
                        required={required}
                        options={opts}
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
          <Link to="/properties">
            <Button type="button" className="flex bg-bg-1" variant="outlined">
              {t("NewProperty.buttons.back")}
            </Button>
          </Link>
          <Button type="submit" className="flex">
            <SaveIcon className="w-5 h-5 text-text-3" />
            {t("NewProperty.buttons.save")}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default NewProperty;
