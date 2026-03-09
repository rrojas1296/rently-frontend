import z from "zod";
import { TenantDocumentTypeEnum } from "../types/Tenants.enum";
import { EMAIL_REGEX } from "@/shared/constants/email.regex";
import type { FormField } from "@/shared/types/formField";

export const createTenantSchema = z.object({
  firstName: z.string().min(1, {
    error: "NewTenant.mainInformation.form.firstName.errors.required",
  }),
  lastName: z.string().min(1, {
    error: "NewTenant.mainInformation.form.lastName.errors.required",
  }),
  documentType: z.enum(TenantDocumentTypeEnum, {
    error: "NewTenant.mainInformation.form.documentType.errors.required",
  }),
  documentNumber: z
    .string({
      error: "NewTenant.mainInformation.form.documentNumber.errors.required",
    })
    .min(1, {
      error: "NewTenant.mainInformation.form.documentNumber.errors.required",
    }),
  birthDate: z.date({
    error: "NewTenant.mainInformation.form.birthDate.errors.required",
  }),
  nationality: z.string({
    error: "NewTenant.mainInformation.form.nationality.errors.required",
  }),
  other: z.string().optional(),
  phone: z
    .string({
      error: "NewTenant.contactInformation.form.phone.errors.required",
    })
    .refine(
      (number) => {
        const phone = number.split(" ")[1];
        return phone;
      },
      {
        error: "NewTenant.contactInformation.form.phone.errors.required",
      },
    ),
  email: z
    .string({
      error: "NewTenant.contactInformation.form.email.errors.required",
    })
    .regex(EMAIL_REGEX, {
      error: "NewTenant.contactInformation.form.email.errors.invalid",
    }),
  emergencyPhone: z
    .string({
      error: "NewTenant.contactInformation.form.emergencyPhone.errors.required",
    })
    .optional(),
  property: z
    .string({
      error: "NewTenant.contractInformation.form.property.errors.required",
    })
    .min(1, {
      error: "NewTenant.form.property.errors.required",
    }),
  entryDate: z.date({
    error: "NewTenant.contractInformation.form.entryDate.errors.required",
  }),
  exitDate: z.date().optional(),
  paymentDay: z
    .number({
      error: "NewTenant.contractInformation.form.paymentDay.errors.required",
    })
    .min(1, {
      error: "NewTenant.contractInformation.form.paymentDay.errors.min",
    })
    .max(31, {
      error: "NewTenant.contractInformation.form.paymentDay.errors.max",
    }),
});

export type CreateTenantSchema = z.infer<typeof createTenantSchema>;

const mainInformationControls: FormField<keyof CreateTenantSchema>[] = [
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
    name: "birthDate",
    placeholder: "NewTenant.mainInformation.form.birthDate.placeholder",
    label: "NewTenant.mainInformation.form.birthDate.label",
    required: true,
    type: "date",
    disableFuture: true,
  },
  {
    name: "documentNumber",
    placeholder: "NewTenant.mainInformation.form.documentNumber.placeholder",
    label: "NewTenant.mainInformation.form.documentNumber.label",
    required: true,
    type: "text",
  },

  {
    name: "nationality",
    placeholder: "NewTenant.mainInformation.form.nationality.placeholder",
    label: "NewTenant.mainInformation.form.nationality.label",
    required: true,
    type: "select",
  },
  {
    name: "other",
    placeholder: "NewTenant.mainInformation.form.otherNationality.placeholder",
    label: "NewTenant.mainInformation.form.otherNationality.label",
    required: false,
    type: "text",
  },
];

const contactInformationControls: FormField<keyof CreateTenantSchema>[] = [
  {
    name: "phone",
    label: "NewTenant.contactInformation.form.phone.label",
    placeholder: "NewTenant.contactInformation.form.phone.placeholder",
    type: "phone",
    required: true,
  },
  {
    name: "email",
    label: "NewTenant.contactInformation.form.email.label",
    placeholder: "NewTenant.contactInformation.form.email.placeholder",
    type: "email",
    required: true,
  },
  {
    name: "emergencyPhone",
    label: "NewTenant.contactInformation.form.emergencyPhone.label",
    placeholder: "NewTenant.contactInformation.form.emergencyPhone.placeholder",
    type: "phone",
    required: false,
  },
];

const contractInformationControls: FormField<keyof CreateTenantSchema>[] = [
  {
    name: "property",
    label: "NewTenant.contractInformation.form.property.label",
    placeholder: "NewTenant.contractInformation.form.property.placeholder",
    type: "select",
    required: true,
  },
  {
    name: "entryDate",
    label: "NewTenant.contractInformation.form.entryDate.label",
    placeholder: "NewTenant.contractInformation.form.entryDate.placeholder",
    type: "date",
    disablePast: true,
    required: true,
  },
  {
    name: "exitDate",
    label: "NewTenant.contractInformation.form.exitDate.label",
    placeholder: "NewTenant.contractInformation.form.exitDate.placeholder",
    type: "date",
    disablePast: true,
    required: false,
  },
  {
    name: "paymentDay",
    label: "NewTenant.contractInformation.form.paymentDay.label",
    placeholder: "NewTenant.contractInformation.form.paymentDay.placeholder",
    type: "number",
    required: true,
  },
];

export const createTenantsSections = [
  {
    id: "1",
    controls: mainInformationControls,
    title: "NewTenant.mainInformation.title",
  },
  {
    id: "2",
    controls: contactInformationControls,
    title: "NewTenant.contactInformation.title",
  },
  {
    id: "3",
    controls: contractInformationControls,
    title: "NewTenant.contractInformation.title",
  },
];
