import { ENDPOINTS } from "@/api/endpoints";
import { apiInstance } from "@/api/instance";
import type { IApiResponse } from "@/api/types";
import type { LoginUserDto } from "../dtos/loginUser.dto";

export const loginUserService = (data: LoginUserDto) => {
  return apiInstance.post<IApiResponse>(ENDPOINTS.auth.login, data);
};
