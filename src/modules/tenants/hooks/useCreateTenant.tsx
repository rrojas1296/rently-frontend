import { useMutation } from "@tanstack/react-query";
import { createTenantService } from "../services/createTenant.service";
import type { CreateTenantDto } from "../dtos/CreateTenant.dto";
import { useNavigate } from "react-router";
import { useToast } from "@/shared/store/useToast";
import { useTranslation } from "react-i18next";

const useCreateTenant = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { setOpen, setContent } = useToast();
  return useMutation({
    mutationKey: ["create-tenant"],
    mutationFn: (data: CreateTenantDto) => createTenantService(data),
    onSuccess: () => {
      setOpen(false);
      setTimeout(() => {
        setOpen(true);
        setContent({
          type: "success",
          title: t("NewTenant.messages.successCreated"),
        });
        navigate("/tenants");
      }, 100);
    },
    onError: () => {
      setOpen(false);
      setTimeout(() => {
        setOpen(true);
        setContent({
          type: "error",
          description: t("NewTenant.messages.error"),
        });
      }, 100);
    },
  });
};

export default useCreateTenant;
