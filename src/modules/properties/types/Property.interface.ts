export type PropertyStatus = "AVAILABLE" | "OCCUPIED" | "MAINTENANCE";

export type PropertyCondition = "NEW" | "REMODELED" | "MAINTENANCE";

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

export enum PropertyStatusEnum {
  AVAILABLE = "AVAILABLE",
  OCCUPIED = "OCCUPIED",
  MAINTENANCE = "MAINTENANCE",
}

export enum PropertyConditionEnum {
  NEW = "NEW",
  REMODELED = "REMODELED",
  MAINTENANCE = "MAINTENANCE",
}

export enum PropertyCurrencyEnum {
  USD = "USD",
  EUR = "EUR",
  PEN = "PEN",
}
