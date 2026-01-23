import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { Button } from "rently-components";
import FormField from "@/shared/components/FormField/FormField";
import {
  registerControls,
  registerSchema,
  type RegisterSchema,
} from "../modules/auth/schemas/register.schema";
import WhatsappColorIcon from "@/shared/components/Icons/WhatsappColorIcon";
import useRegisterUser from "@/modules/auth/hooks/useRegisterUser";
import { LoaderIcon } from "lucide-react";

const RegisterPage = () => {
  const { t } = useTranslation();
  const { mutate, isPending } = useRegisterUser();
  const {
    handleSubmit,
    formState: { errors },
    control,
    register,
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const handleRegister = (data: RegisterSchema) => {
    const { firstName, lastName, email, password } = data;
    mutate({
      firstName,
      lastName,
      email,
      password,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-1 px-4 py-8">
      <div className="w-full max-w-md animate-fade-in">
        <div className="bg-bg-2 rounded-2xl p-8 shadow-lg border border-border-2">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-primary-500">
              {t("Register.logo")}
            </h1>
            <p className="text-text-2 mt-2">{t("Register.subtitle")}</p>
          </div>

          <form onSubmit={handleSubmit(handleRegister)} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              {registerControls
                .slice(0, 2)
                .map(({ name, label, placeholder, type, required }) => {
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
                      control={control}
                      error={errorTranslated}
                      {...register(name)}
                    />
                  );
                })}
            </div>

            {registerControls
              .slice(2)
              .map(({ name, label, placeholder, type, required }) => {
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
                    control={control}
                    error={errorTranslated}
                    {...register(name)}
                  />
                );
              })}

            <Button
              variant="filled"
              type="submit"
              className="w-full justify-center"
            >
              {isPending && <LoaderIcon className="animate-spin" />}
              {t("Register.buttons.register")}
            </Button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border-2" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-bg-2 px-4 text-text-2">
                  {t("Register.divider")}
                </span>
              </div>
            </div>

            <Button
              variant="outlined"
              type="button"
              className="w-full justify-center gap-3"
              onClick={() => console.log("Google login")}
            >
              <WhatsappColorIcon />
              {t("Register.buttons.google")}
            </Button>
          </form>

          <p className="text-center text-text-2 mt-6">
            {t("Register.hasAccount")}{" "}
            <Link to="/login" className="text-primary-400 hover:underline">
              {t("Register.login")}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
