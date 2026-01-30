import { useMutation } from "@tanstack/react-query";
import { createTenantService } from "../service/createTenant.service";
import type { CreateTenantDto } from "../dtos/CreateTenant.dto";

const useCreateTenant = () => {
  return useMutation({
    mutationKey: ["create-tenant"],
    mutationFn: (data: CreateTenantDto) => createTenantService(data),
  });
};

export default useCreateTenant;
