import { ENDPOINTS } from "@/api/endpoints";
import { apiInstance } from "@/api/instance";
import type { IApiResponse } from "@/api/types";

interface Response extends IApiResponse {
  exist: boolean;
}

export const checkEmailExistService = async (email: string) => {
  try {
    const response = await apiInstance.get<Response>(
      `${ENDPOINTS.auth.checkEmailExist}/${email}`,
    );
    const exist = response.data.exist;
    return exist;
  } catch {
    return true;
  }
};
