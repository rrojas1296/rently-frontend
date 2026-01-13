import z from "zod";
import { PropertyCurrencyEnum } from "../types/Property.interface";
import type { FormField } from "../../common/types/formField";

export const financialInformationSchema = z.object({
  monthlyPayment: z
    .number({
      error:
        "NewProperty.financialInformation.form.monthlyPayment.errors.required",
    })
    .min(1, {
      error: "NewProperty.financialInformation.form.monthlyPayment.errors.min",
    }),
  garanty: z
    .number({
      error: "NewProperty.financialInformation.form.garanty.errors.required",
    })
    .min(1, {
      error: "NewProperty.financialInformation.form.garanty.errors.min",
    }),
  currency: z.enum(PropertyCurrencyEnum, {
    error: "NewProperty.financialInformation.form.currency.errors.required",
  }),
  monthlyFee: z.number().or(z.nan()),
});

export type FinancialInformationSchema = z.infer<
  typeof financialInformationSchema
>;
export type FinancialInformationFields = keyof FinancialInformationSchema;

export const financialInformationControls: FormField<FinancialInformationFields>[] =
  [
    {
      name: "monthlyPayment",
      type: "number",
      label: "NewProperty.financialInformation.form.monthlyPayment.label",
      placeholder:
        "NewProperty.financialInformation.form.monthlyPayment.placeholder",
      required: true,
    },
    {
      name: "garanty",
      type: "number",
      label: "NewProperty.financialInformation.form.garanty.label",
      placeholder: "NewProperty.financialInformation.form.garanty.placeholder",
      required: true,
    },
    {
      name: "currency",
      type: "select",
      label: "NewProperty.financialInformation.form.currency.label",
      placeholder: "NewProperty.financialInformation.form.currency.placeholder",
      required: true,
      options: [
        {
          label: "NewProperty.financialInformation.form.currency.options.eur",
          value: PropertyCurrencyEnum.EUR,
        },
        {
          label: "NewProperty.financialInformation.form.currency.options.usd",
          value: PropertyCurrencyEnum.USD,
        },
        {
          label: "NewProperty.financialInformation.form.currency.options.pen",
          value: PropertyCurrencyEnum.PEN,
        },
      ],
    },
    {
      name: "monthlyFee",
      type: "number",
      label: "NewProperty.financialInformation.form.monthlyFee.label",
      placeholder:
        "NewProperty.financialInformation.form.monthlyFee.placeholder",
      required: false,
    },
  ];
