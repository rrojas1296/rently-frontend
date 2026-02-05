import type {
  TenantDocumentType,
  TenantNationality,
} from "../types/Tenant.interface";

export interface CreateTenantDto {
  firstName: string;
  lastName: string;
  email: string;
  emergencyPhone?: string;
  phone: string;
  property: string;
  paymentDay: number;
  documentType: TenantDocumentType;
  documentNumber: string;
  birthDate: Date;
  nationality: TenantNationality;
  entryDate: Date;
  exitDate?: Date;
}
