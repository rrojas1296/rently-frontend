import z from "zod";
import type { FormField } from "../../common/types/formField";

export const tenantsContractInformationSchema = z.object({
  property: z.string().min(1, {
    error: "NewTenant.form.property.errors.required",
  }),
  entryDate: z.date().min(new Date(), {
    error: "NewTenant.form.entryDate.errors.required",
  }),
  exitDate: z.date().min(new Date(), {
    error: "NewTenant.form.exitDate.errors.required",
  }),
  paymentDay: z
    .number()
    .min(1, {
      error: "NewTenant.form.paymentDay.errors.min",
    })
    .max(31, {
      error: "NewTenant.form.paymentDay.errors.max",
    }),
});

export type TenantsContractInformationSchema = z.infer<
  typeof tenantsContractInformationSchema
>;

export const tenantsContractInformationControls: FormField<
  keyof TenantsContractInformationSchema
>[] = [
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
    required: true,
  },
  {
    name: "exitDate",
    label: "NewTenant.contractInformation.form.exitDate.label",
    placeholder: "NewTenant.contractInformation.form.exitDate.placeholder",
    type: "date",
    required: true,
  },
  {
    name: "paymentDay",
    label: "NewTenant.contractInformation.form.paymentDay.label",
    placeholder: "NewTenant.contractInformation.form.paymentDay.placeholder",
    type: "number",
    required: true,
  },
];
