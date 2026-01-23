import { ENDPOINTS } from "@/api/endpoints";
import { apiInstance } from "@/api/instance";
import type { IApiResponse } from "@/api/types";
import type { IUser } from "../types/user.interface";

interface Response extends IApiResponse {
  isValid: boolean;
  user: IUser;
}

export const validateSession = () => {
  return apiInstance.get<Response>(ENDPOINTS.auth.validate);
};
