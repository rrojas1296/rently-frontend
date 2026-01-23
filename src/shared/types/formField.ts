import type { ComponentProps } from "react";

export type FormFieldType =
  | ComponentProps<"input">["type"]
  | "select"
  | "phone"
  | "date"
  | "switch";

export interface FormFieldOption {
  value: string;
  label: string;
}

export interface FormField<T> {
  name: T;
  type: FormFieldType;
  label: string;
  placeholder?: string;
  required: boolean;
  options?: FormFieldOption[];
}
