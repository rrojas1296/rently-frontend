import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { Button } from "rently-components";
import FormField from "@/shared/components/FormField/FormField";
import AuthImage from "@/assets/images/auth.png";
import {
  loginControls,
  loginSchema,
  type LoginSchema,
} from "../modules/auth/schemas/login.schema";
import GoogleIcon from "@/shared/components/Icons/GoogleIcon";
import useLoginUser from "@/modules/auth/hooks/useLoginUser";
import { Building2Icon, LoaderIcon } from "lucide-react";

const LoginPage = () => {
  const { t } = useTranslation();
  const { mutate, isPending } = useLoginUser();
  const {
    handleSubmit,
    formState: { errors },
    control,
    register,
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const handleLogin = (data: LoginSchema) => mutate(data);

  return (
    <div className="h-screen flex custom-scroll overflow-y-auto lg:overflow-visible">
      <div className="w-full p-5 md:px-30 md:py-10 overflow-y-auto lg:w-130 lg:px-20 lg:py-12 lg:relative">
        <div className="flex gap-3 items-center mb-8 lg:mb-16">
          <Building2Icon className="w-6 h-6 text-primary-400" />
          <h1 className="text-xl font-bold text-text-1">{t("Login.logo")}</h1>
        </div>

        <form
          onSubmit={handleSubmit(handleLogin)}
          className="grid gap-5 grid-cols-2 2xl:absolute 2xl:top-1/2 2xl:left-1/2 2xl:-translate-x-1/2 2xl:-translate-y-1/2 2xl:w-full 2xl:max-w-90"
        >
          <div className="col-span-2">
            <h2 className="text-2xl font-bold text-text-1">
              {t("Login.welcomeBack")}
            </h2>
            <p className="text-text-2 text-sm mt-1">{t("Login.subtitle")}</p>
          </div>
          {loginControls.map(
            ({ name, label, placeholder, className, type, required }) => {
              const errorTranslated = errors[name]?.message
                ? t(errors[name].message)
                : "";
              return (
                <FormField
                  key={name}
                  label={t(label)}
                  className={className}
                  type={type}
                  placeholder={placeholder && t(placeholder)}
                  required={required}
                  control={control}
                  error={errorTranslated}
                  {...register(name)}
                />
              );
            },
          )}

          <Button
            variant="filled"
            type="submit"
            className="w-full justify-center col-span-2"
          >
            {isPending && (
              <LoaderIcon className="w-5 h-5 animate-spin text-text-3" />
            )}
            {t("Login.buttons.login")}
          </Button>

          <div className="relative my-4 col-span-2">
            <div className="absolute inset-0 flex items-center">
              <hr className="w-full border-border-2" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-bg-2 px-4 text-text-2">
                {t("Login.divider")}
              </span>
            </div>
          </div>

          <Button
            variant="outlined"
            type="button"
            className="justify-center gap-2 w-full col-span-2"
            onClick={() => console.log("Google login")}
          >
            <GoogleIcon />
            {t("Login.buttons.google")}
          </Button>
          <p className="text-center text-text-2 text-sm col-span-2">
            {t("Login.noAccount")}{" "}
            <Link
              to="/register"
              className="text-primary-400 hover:underline font-medium"
            >
              {t("Login.register")}
            </Link>
          </p>
        </form>
      </div>

      <div
        className="hidden lg:flex lg:flex-1 relative bg-cover bg-center"
        style={{ backgroundImage: "url('/auth.png')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <img
          src={AuthImage}
          alt="Auth image"
          className="w-full h-full object-cover"
        />

        <div className="absolute bottom-12 left-12 right-12 text-white">
          <h2 className="text-4xl font-bold leading-tight mb-3">
            {t("Login.marketing.title")}
          </h2>
          <p className="text-base text-white/90">
            {t("Login.marketing.subtitle")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
