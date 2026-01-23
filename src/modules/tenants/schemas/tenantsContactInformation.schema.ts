import z from "zod";
import type { FormField } from "@/shared/types/formField";
import { EMAIL_REGEX } from "@/shared/constants/email.regex";

export const tenantContactInformationSchema = z.object({
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
  emergencyPhone: z.string({
    error: "NewTenant.contactInformation.form.emergencyPhone.errors.required",
  }),
});

export type TenantsContactInformationSchema = z.infer<
  typeof tenantContactInformationSchema
>;

export const tenantsContactInformationControls: FormField<
  keyof TenantsContactInformationSchema
>[] = [
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
