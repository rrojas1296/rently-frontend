import { API_URL } from "@/shared/config/environments";
import axios from "axios";

export const apiInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});
