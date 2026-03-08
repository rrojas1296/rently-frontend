import { useTranslation } from "react-i18next";
import {
  createPropertySchema,
  createPropertySections,
  type CreatePropertySchema,
} from "../schemas/createProperty.schema";
import FormField from "@/shared/components/FormField/FormField";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const NewProperty = () => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createPropertySchema),
  });

  const createProperty = (data: CreatePropertySchema) => {
    console.log({ data });
  };
  return (
    <form
      onSubmit={handleSubmit(createProperty)}
      className="animate-fade-in lg:h-full"
    >
      <div className="flex flex-col gap-px mb-5">
        <h1 className="text-text-1 font-semibold text-2xl">
          {t("NewProperty.title")}
        </h1>
        <p className="text-sm text-text-2">{t("NewProperty.description")}</p>
      </div>
      <div className="flex flex-col gap-8">
        {createPropertySections.map(({ id, title, controls }) => {
          return (
            <div key={id} className="">
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
                    const error = errors[name]?.message || "";
                    return (
                      <FormField
                        key={name}
                        className={className}
                        label={t(label)}
                        placeholder={t(placeholder!)}
                        type={type}
                        required={required}
                        options={opts}
                        name={name}
                        error={error}
                        control={control}
                        {...register}
                      />
                    );
                  },
                )}
              </div>
            </div>
          );
        })}
      </div>
    </form>
  );
};

export default NewProperty;
