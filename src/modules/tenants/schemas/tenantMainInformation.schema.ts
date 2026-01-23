import z from "zod";
import {
  TenantDocumentTypeEnum,
  TenantNationalityEnum,
} from "../types/Tenants.enum";
import type { FormField } from "@/shared/types/formField";

export const tenantMainInformationSchema = z.object({
  firstName: z.string().min(1, {
    error: "NewTenant.mainInformation.form.firstName.errors.required",
  }),
  lastName: z.string().min(1, {
    error: "NewTenant.mainInformation.form.lastName.errors.required",
  }),
  documentType: z.enum(TenantDocumentTypeEnum, {
    error: "NewTenant.mainInformation.form.documentType.errors.required",
  }),
  documentNumber: z.number({
    error: "NewTenant.mainInformation.form.documentNumber.errors.required",
  }),
  birthDate: z.date({
    error: "NewTenant.mainInformation.form.birthDate.errors.required",
  }),
  nationality: z.enum(TenantNationalityEnum, {
    error: "NewTenant.mainInformation.form.nationality.errors.required",
  }),
});

export type TenantMainInformationSchema = z.infer<
  typeof tenantMainInformationSchema
>;

export type TenantMainInformationFields = keyof TenantMainInformationSchema;

export const tenantMainInformationControls: FormField<TenantMainInformationFields>[] =
  [
    {
      name: "firstName",
      placeholder: "NewTenant.mainInformation.form.firstName.placeholder",
      label: "NewTenant.mainInformation.form.firstName.label",
      required: true,
      type: "text",
    },
    {
      name: "lastName",
      placeholder: "NewTenant.mainInformation.form.lastName.placeholder",
      label: "NewTenant.mainInformation.form.lastName.label",
      required: true,
      type: "text",
    },
    {
      name: "documentType",
      placeholder: "NewTenant.mainInformation.form.documentType.placeholder",
      label: "NewTenant.mainInformation.form.documentType.label",
      required: true,
      type: "select",
      options: [
        {
          label: "NewTenant.mainInformation.form.documentType.options.dni",
          value: TenantDocumentTypeEnum.DNI,
        },
        {
          label: "NewTenant.mainInformation.form.documentType.options.passport",
          value: TenantDocumentTypeEnum.PASSPORT,
        },
      ],
    },
    {
      name: "documentNumber",
      placeholder: "NewTenant.mainInformation.form.documentNumber.placeholder",
      label: "NewTenant.mainInformation.form.documentNumber.label",
      required: true,
      type: "number",
    },
    {
      name: "birthDate",
      placeholder: "NewTenant.mainInformation.form.birthDate.placeholder",
      label: "NewTenant.mainInformation.form.birthDate.label",
      required: true,
      type: "date",
    },

    {
      name: "nationality",
      placeholder: "NewTenant.mainInformation.form.nationality.placeholder",
      label: "NewTenant.mainInformation.form.nationality.label",
      required: true,
      type: "select",
    },
  ];
