import { ENDPOINTS } from "@/api/endpoints";
import { apiInstance } from "@/api/instance";
import type { IApiResponse } from "@/api/types";
import type { ITenant } from "../types/Tenant.interface";

interface Response extends IApiResponse {
  tenants: ITenant[];
  hasTenants: boolean;
}

export const getTenantsService = () => {
  return apiInstance.get<Response>(ENDPOINTS.tenants.getAll);
};
