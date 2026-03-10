import { ENDPOINTS } from "@/api/endpoints";
import { apiInstance } from "@/api/instance";
import type { IApiResponse } from "@/api/types";

interface Response extends IApiResponse {
  data: {
    tenants: { id: string; name: string }[];
    properties: { id: string; name: string }[];
  };
}

export const getFiltersService = async () => {
  return apiInstance.get<Response>(ENDPOINTS.payments.filters);
};
