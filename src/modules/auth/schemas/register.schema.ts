import z from "zod";
import type { FormField } from "@/shared/types/formField";
import { EMAIL_REGEX } from "@/shared/constants/email.regex";
import { checkEmailExistService } from "../services/checkEmailExist";

export const registerSchema = z
  .object({
    firstName: z
      .string({
        error: "Register.form.firstName.errors.required",
      })
      .min(1, {
        error: "Register.form.firstName.errors.required",
      }),
    lastName: z
      .string({
        error: "Register.form.lastName.errors.required",
      })
      .min(1, {
        error: "Register.form.lastName.errors.required",
      }),
    email: z
      .string({
        error: "Register.form.email.errors.required",
      })
      .regex(EMAIL_REGEX, {
        error: "Register.form.email.errors.invalid",
      }),
    password: z
      .string({
        error: "Register.form.password.errors.required",
      })
      .min(6, {
        error: "Register.form.password.errors.min",
      }),
    confirmPassword: z.string({
      error: "Register.form.confirmPassword.errors.required",
    }),
  })
  .superRefine(async (data, ctx) => {
    if (data.password !== data.confirmPassword) {
      ctx.addIssue({
        code: "custom",
        message: "Register.form.confirmPassword.errors.notMatch",
        path: ["confirmPassword"],
      });
    }

    const exist = await checkEmailExistService(data.email);
    console.log({ exist });
    if (exist) {
      ctx.addIssue({
        code: "custom",
        message: "Register.form.email.errors.exist",
        path: ["email"],
      });
    }
  });

export type RegisterSchema = z.infer<typeof registerSchema>;

export const registerControls: FormField<keyof RegisterSchema>[] = [
  {
    name: "firstName",
    label: "Register.form.firstName.label",
    placeholder: "Register.form.firstName.placeholder",
    type: "text",
    required: true,
  },
  {
    name: "lastName",
    label: "Register.form.lastName.label",
    placeholder: "Register.form.lastName.placeholder",
    type: "text",
    required: true,
  },
  {
    name: "email",
    label: "Register.form.email.label",
    placeholder: "Register.form.email.placeholder",
    type: "email",
    required: true,
    className: "col-span-2",
  },
  {
    name: "password",
    label: "Register.form.password.label",
    placeholder: "Register.form.password.placeholder",
    type: "password",
    required: true,
    className: "col-span-2",
  },
  {
    name: "confirmPassword",
    label: "Register.form.confirmPassword.label",
    placeholder: "Register.form.confirmPassword.placeholder",
    type: "password",
    required: true,
    className: "col-span-2",
  },
];
