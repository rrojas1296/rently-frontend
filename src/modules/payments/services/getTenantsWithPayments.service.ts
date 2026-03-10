import { ENDPOINTS } from "@/api/endpoints";
import { apiInstance } from "@/api/instance";
import type { IApiResponse } from "@/api/types";

interface Response extends IApiResponse {
  tenants: {
    name: string;
    id: string;
  }[];
}

export const getTenantsWithPaymentsService = async () => {
  return apiInstance.get<Response>(ENDPOINTS.tenants.withPayments);
};
