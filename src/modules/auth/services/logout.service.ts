import { ENDPOINTS } from "@/api/endpoints";
import { apiInstance } from "@/api/instance";
import type { IApiResponse } from "@/api/types";

export const logoutService = () => {
  return apiInstance.get<IApiResponse>(ENDPOINTS.auth.logout);
};
