import { ENDPOINTS } from "@/api/endpoints";
import { apiInstance } from "@/api/instance";
import type { IApiResponse } from "@/api/types";
import type { IProperty } from "../types/Property.interface";

interface Response extends IApiResponse {
  data: {
    properties: IProperty[];
    hasProperties: boolean;
  };
}

export const getPropertiesService = () => {
  return apiInstance.get<Response>(ENDPOINTS.properties.get);
};
