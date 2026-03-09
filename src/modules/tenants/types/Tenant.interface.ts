import type { PropertyCurrencyEnum } from "../../properties/types/Property.interface";
import type { TenantDocumentTypeEnum } from "./Tenants.enum";

export type TenantStatus = "PAID" | "DUE_TODAY" | "UNPAID" | "DUE_SOON";

export type TenantDocumentType = "DNI" | "PASSPORT";

export interface ITenant {
  id: string;
  name: string;
  paymentStatus: TenantStatus;
  nationality: string;
  otherNationality?: string;
  email: string;
  phone: string;
  entryDate: string;
  exitDate?: string;
  documentType: TenantDocumentTypeEnum;
  documentNumber: string;
  emergencyPhone?: string;
  paymentDay: number;
  monthlyPayment: number;
  currency: PropertyCurrencyEnum;
  avatarUrl?: string;
  propertyName: string;
}
