import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { Button } from "rently-components";
import FormField from "@/shared/components/FormField/FormField";
import {
  loginControls,
  loginSchema,
  type LoginSchema,
} from "../modules/auth/schemas/login.schema";
import WhatsappColorIcon from "@/shared/components/Icons/WhatsappColorIcon";
import useLoginUser from "@/modules/auth/hooks/useLoginUser";
import { LoaderIcon } from "lucide-react";

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

  const handleLogin = (data: LoginSchema) => {
    mutate(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-1 px-4">
      <div className="w-full max-w-md animate-fade-in">
        <div className="bg-bg-2 rounded-2xl p-8 shadow-lg border border-border-2">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-primary-500">
              {t("Login.logo")}
            </h1>
            <p className="text-text-2 mt-2">{t("Login.subtitle")}</p>
          </div>

          <form onSubmit={handleSubmit(handleLogin)} className="space-y-5">
            {loginControls.map(
              ({ name, label, placeholder, type, required }) => {
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
              },
            )}

            <div className="flex items-center justify-end">
              <Link
                to="/forgot-password"
                className="text-sm text-primary-400 hover:underline"
              >
                {t("Login.forgotPassword")}
              </Link>
            </div>

            <Button
              variant="filled"
              type="submit"
              className="w-full justify-center"
            >
              {isPending && (
                <LoaderIcon className="w-5 h-5 animate-spin text-text-3" />
              )}
              {t("Login.buttons.login")}
            </Button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border-2" />
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
              className="w-full justify-center gap-3"
              onClick={() => console.log("Google login")}
            >
              <WhatsappColorIcon />
              {t("Login.buttons.google")}
            </Button>
          </form>

          <p className="text-center text-text-2 mt-6">
            {t("Login.noAccount")}{" "}
            <Link to="/register" className="text-primary-400 hover:underline">
              {t("Login.register")}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
