import z from "zod";
import type { FormField } from "@/shared/types/formField";
import { EMAIL_REGEX } from "@/shared/constants/email.regex";

export const loginSchema = z.object({
  email: z
    .string({
      error: "Login.form.email.errors.required",
    })
    .regex(EMAIL_REGEX, {
      error: "Login.form.email.errors.invalid",
    }),
  password: z
    .string({
      error: "Login.form.password.errors.required",
    })
    .min(6, {
      error: "Login.form.password.errors.min",
    }),
});

export type LoginSchema = z.infer<typeof loginSchema>;

export const loginControls: FormField<keyof LoginSchema>[] = [
  {
    name: "email",
    label: "Login.form.email.label",
    placeholder: "Login.form.email.placeholder",
    type: "email",
    required: true,
    className: "col-span-2",
  },
  {
    name: "password",
    label: "Login.form.password.label",
    placeholder: "Login.form.password.placeholder",
    type: "password",
    required: true,
    className: "col-span-2",
  },
];
