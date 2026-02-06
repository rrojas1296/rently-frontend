import type { TenantDocumentType } from "../types/Tenant.interface";

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
  nationality: string;
  entryDate: Date;
  exitDate?: Date;
}
