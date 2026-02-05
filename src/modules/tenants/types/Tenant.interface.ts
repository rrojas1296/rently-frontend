import type { PropertyCurrency } from "../../properties/types/Property.interface";
import type { TenantDocumentTypeEnum } from "./Tenants.enum";

export type TenantStatus = "PAID" | "PENDING" | "DUE_SOON";

export type TenantDocumentType = "DNI" | "PASSPORT";

export type TenantNationality =
  | "ANTIGUA_AND_BARBUDA"
  | "ARGENTINA"
  | "BAHAMAS"
  | "BARBADOS"
  | "BELIZE"
  | "BOLIVIA"
  | "BRAZIL"
  | "CANADA"
  | "CHILE"
  | "COLOMBIA"
  | "COSTA_RICA"
  | "CUBA"
  | "DOMINICA"
  | "DOMINICAN_REPUBLIC"
  | "ECUADOR"
  | "EL_SALVADOR"
  | "GRENADA"
  | "GUATEMALA"
  | "GUYANA"
  | "HAITI"
  | "HONDURAS"
  | "JAMAICA"
  | "MEXICO"
  | "NICARAGUA"
  | "PANAMA"
  | "PARAGUAY"
  | "PERU"
  | "SAINT_KITTS_AND_NEVIS"
  | "SAINT_LUCIA"
  | "SAINT_VINCENT_AND_THE_GRENADINES"
  | "SURINAME"
  | "TRINIDAD_AND_TOBAGO"
  | "UNITED_STATES"
  | "URUGUAY"
  | "VENEZUELA";

export interface ITenant {
  id: string;
  name: string;
  paymentStatus: TenantStatus;
  nationality: TenantNationality;
  email: string;
  phone: string;
  entryDate: string;
  exitDate?: string;
  documentType: TenantDocumentTypeEnum;
  documentNumber: string;
  emergencyPhone?: string;
  paymentDay: number;
  monthlyPayment: number;
  currency: PropertyCurrency;
  avatarUrl?: string;
  propertyName: string;
}
