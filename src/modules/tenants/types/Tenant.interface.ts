import type { PropertyCurrency } from "../../properties/types/Property.interface";

export type TenantStatus = "PAID" | "OVERDUE";

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
  apartmentName: string;
  status: TenantStatus;
  nationality: TenantNationality;
  email: string;
  phone: string;
  entryDate: string;
  monthlyPayment: number;
  curreny: PropertyCurrency;
  imageUrl?: string;
}
