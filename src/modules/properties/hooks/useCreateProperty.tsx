import { useMutation } from "@tanstack/react-query";
import { createPropertyService } from "../services/createProperty.service";
import type { CreatePropertyDto } from "../dtos/createProperty.dto";
import { useNavigate } from "react-router";
import { useToast } from "@/shared/store/useToast";
import { useTranslation } from "react-i18next";

const useCreateProperty = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { setOpen, setContent } = useToast();
  return useMutation({
    mutationKey: ["create-property"],
    mutationFn: (data: CreatePropertyDto) => createPropertyService(data),
    onSuccess: () => {
      navigate("/properties");
      setOpen(false);
      setTimeout(() => {
        setOpen(true);
        setContent({
          type: "success",
          title: t("NewProperty.messages.successCreated"),
        });
      }, 100);
    },
    onError: () => {
      setOpen(false);
      setTimeout(() => {
        setOpen(true);
        setContent({
          type: "error",
          description: t("NewProperty.messages.error"),
        });
      }, 100);
    },
  });
};

export default useCreateProperty;
