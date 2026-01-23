import { apiInstance } from "@/api/instance";
import type { CreateUserDto } from "../dtos/createUser.dto";
import { ENDPOINTS } from "@/api/endpoints";
import type { IApiResponse } from "@/api/types";

export const registerUserService = (data: CreateUserDto) => {
  return apiInstance.post<IApiResponse>(ENDPOINTS.auth.register, data);
};
