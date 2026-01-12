export type PropertyStatus = "AVAILABLE" | "OCCUPIED" | "MAINTENANCE";

export type PropertyCurrency = "USD" | "EUR" | "PEN";

export interface IProperty {
  id: string;
  name: string;
  address: string;
  status: PropertyStatus;
  rooms: number;
  bathrooms: number;
  area: number;
  price: number;
  currency: PropertyCurrency;
  tenantName?: string;
}
