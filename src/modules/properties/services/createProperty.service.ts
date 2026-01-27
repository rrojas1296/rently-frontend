import { ENDPOINTS } from "@/api/endpoints";
import { apiInstance } from "@/api/instance";
import type { CreatePropertyDto } from "../dtos/createProperty.dto";

export const createPropertyService = async (data: CreatePropertyDto) => {
  return apiInstance.post(ENDPOINTS.properties.create, data);
};
