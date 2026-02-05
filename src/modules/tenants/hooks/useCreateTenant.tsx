import { useMutation } from "@tanstack/react-query";
import { createTenantService } from "../services/createTenant.service";
import type { CreateTenantDto } from "../dtos/CreateTenant.dto";
import { useNavigate } from "react-router";
import { useToast } from "@/shared/store/useToast";

const useCreateTenant = () => {
  const navigate = useNavigate();
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
          title: "Success",
          description: "Tenant created successfully",
        });
        navigate("/tenants");
      }, 100);
    },
  });
};

export default useCreateTenant;
