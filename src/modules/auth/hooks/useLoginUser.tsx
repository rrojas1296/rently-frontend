import { useMutation } from "@tanstack/react-query";
import { loginUserService } from "../services/loginUser.service";
import type { LoginUserDto } from "../dtos/loginUser.dto";
import { useNavigate } from "react-router";
import { useToast } from "@/shared/store/useToast";
import type { AxiosError } from "axios";
import { useTranslation } from "react-i18next";
import type { IApiResponse } from "@/api/types";

const useLoginUser = () => {
  const navigate = useNavigate();
  const { setOpen, setContent } = useToast();
  const { t } = useTranslation();
  return useMutation({
    mutationKey: ["login-user"],
    mutationFn: (data: LoginUserDto) => loginUserService(data),
    onSuccess: () => {
      navigate("/dashboard", { replace: true });
    },
    onError: (err: AxiosError) => {
      const code = (err.response?.data as IApiResponse).message;
      const title = `Login.errors.${code}.title`;
      const description = `Login.errors.${code}.description`;

      setOpen(false);
      setTimeout(() => {
        setOpen(true);
        setContent({
          type: "error",
          title: t(title),
          description: t(description),
        });
      }, 100);
    },
  });
};

export default useLoginUser;
