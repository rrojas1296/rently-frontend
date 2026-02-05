import { apiInstance } from "@/api/instance";
import type { CreateTenantDto } from "../dtos/CreateTenant.dto";
import { ENDPOINTS } from "@/api/endpoints";

export const createTenantService = async (data: CreateTenantDto) => {
  return apiInstance.post(ENDPOINTS.tenants.create, data);
};
