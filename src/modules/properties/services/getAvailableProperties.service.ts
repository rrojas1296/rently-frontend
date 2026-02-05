import { ENDPOINTS } from "@/api/endpoints";
import { apiInstance } from "@/api/instance";
import type { IApiResponse } from "@/api/types";

interface Response extends IApiResponse {
  properties: {
    id: string;
    name: string;
  }[];
}

export const getAvailablePropertiesService = async () => {
  return apiInstance.get<Response>(ENDPOINTS.properties.getAvailable);
};
