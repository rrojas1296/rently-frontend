import type {
  PropertyCondition,
  PropertyCurrency,
  PropertyStatus,
} from "../types/Property.interface";

export interface CreatePropertyDto {
  name: string;
  address: string;
  internalCode: string;
  floor: number;
  area: number;
  status: PropertyStatus;

  persons: number;
  rooms: number;
  bathrooms: number;
  floors: number;
  condition: PropertyCondition;
  furnished: boolean;
  pets: boolean;

  monthlyPayment: number;
  garanty: number;
  currency: PropertyCurrency;
  monthlyFee?: number;
}
