import type { PropertyCurrency, PropertyStatus } from "./Property.interface";

export interface PropertyFilters {
  status: PropertyStatus | "all";
  rooms: string;
  bathrooms: string;
  currency: PropertyCurrency | "all";
  price: string;
}
