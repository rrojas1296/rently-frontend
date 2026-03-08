import z from "zod";
import {
  PropertyConditionEnum,
  PropertyCurrencyEnum,
  PropertyStatusEnum,
} from "../types/Property.interface";
import type { FormField } from "@/shared/types/formField";

export const createPropertySchema = z.object({
  name: z.string().min(1, {
    error: "NewProperty.mainInformation.form.name.errors.required",
  }),
  address: z.string().min(1, {
    error: "NewProperty.mainInformation.form.address.errors.required",
  }),
  internalCode: z.string().min(1, {
    error: "NewProperty.mainInformation.form.internalCode.errors.required",
  }),
  floor: z
    .number({
      error: "NewProperty.mainInformation.form.floor.errors.required",
    })
    .min(1, {
      error: "NewProperty.mainInformation.form.floor.errors.min",
    }),
  area: z
    .number({
      error: "NewProperty.mainInformation.form.area.errors.required",
    })
    .min(1, {
      error: "NewProperty.mainInformation.form.area.errors.min",
    }),
  status: z.enum(PropertyStatusEnum, {
    error: "NewProperty.mainInformation.form.status.errors.required",
  }),
  persons: z
    .number({
      error: "NewProperty.physicalDetails.form.persons.errors.required",
    })
    .min(1, {
      error: "NewProperty.physicalDetails.form.persons.errors.min",
    }),
  rooms: z
    .number({
      error: "NewProperty.physicalDetails.form.rooms.errors.required",
    })
    .min(1, {
      error: "NewProperty.physicalDetails.form.rooms.errors.min",
    }),
  bathrooms: z
    .number({
      error: "NewProperty.physicalDetails.form.bathrooms.errors.required",
    })
    .min(1, {
      error: "NewProperty.physicalDetails.form.bathrooms.errors.min",
    }),
  floors: z
    .number({
      error: "NewProperty.physicalDetails.form.floors.errors.required",
    })
    .min(1, {
      error: "NewProperty.physicalDetails.form.floors.errors.min",
    }),
  condition: z.enum(PropertyConditionEnum, {
    error: "NewProperty.physicalDetails.form.condition.errors.required",
  }),
  furnished: z.boolean(),
  pets: z.boolean(),
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

export type CreatePropertySchema = z.infer<typeof createPropertySchema>;
export const mainInformationFields: FormField<keyof CreatePropertySchema>[] = [
  {
    name: "name",
    label: "NewProperty.mainInformation.form.name.label",
    placeholder: "NewProperty.mainInformation.form.name.placeholder",
    required: true,
    type: "text",
  },
  {
    name: "address",
    label: "NewProperty.mainInformation.form.address.label",
    placeholder: "NewProperty.mainInformation.form.address.placeholder",
    required: true,
    type: "text",
  },
  {
    name: "internalCode",
    label: "NewProperty.mainInformation.form.internalCode.label",
    placeholder: "NewProperty.mainInformation.form.internalCode.placeholder",
    required: true,
    type: "text",
  },
  {
    name: "floor",
    label: "NewProperty.mainInformation.form.floor.label",
    placeholder: "NewProperty.mainInformation.form.floor.placeholder",
    required: true,
    type: "number",
  },
  {
    name: "status",
    label: "NewProperty.mainInformation.form.status.label",
    placeholder: "NewProperty.mainInformation.form.status.placeholder",
    required: true,
    type: "select",
    options: [
      {
        value: PropertyStatusEnum.AVAILABLE,
        label: "NewProperty.mainInformation.form.status.options.available",
      },
      {
        value: PropertyStatusEnum.OCCUPIED,
        label: "NewProperty.mainInformation.form.status.options.occupied",
      },
      {
        value: PropertyStatusEnum.MAINTENANCE,
        label: "NewProperty.mainInformation.form.status.options.maintenance",
      },
    ],
  },
];

export const physicalDetailsFields: FormField<keyof CreatePropertySchema>[] = [
  {
    name: "persons",
    label: "NewProperty.physicalDetails.form.persons.label",
    placeholder: "NewProperty.physicalDetails.form.persons.placeholder",
    type: "number",
    required: true,
  },
  {
    name: "rooms",
    label: "NewProperty.physicalDetails.form.rooms.label",
    placeholder: "NewProperty.physicalDetails.form.rooms.placeholder",
    type: "number",
    required: true,
  },
  {
    name: "bathrooms",
    label: "NewProperty.physicalDetails.form.bathrooms.label",
    placeholder: "NewProperty.physicalDetails.form.bathrooms.placeholder",
    type: "number",
    required: true,
  },
  {
    name: "area",
    label: "NewProperty.mainInformation.form.area.label",
    placeholder: "NewProperty.mainInformation.form.area.placeholder",
    required: true,
    type: "number",
  },
  {
    name: "floors",
    label: "NewProperty.physicalDetails.form.floors.label",
    placeholder: "NewProperty.physicalDetails.form.floors.placeholder",
    type: "number",
    required: true,
  },
  {
    name: "condition",
    label: "NewProperty.physicalDetails.form.condition.label",
    placeholder: "NewProperty.physicalDetails.form.condition.placeholder",
    type: "select",
    required: true,
    options: [
      {
        value: PropertyConditionEnum.NEW,
        label: "NewProperty.physicalDetails.form.condition.options.new",
      },
      {
        value: PropertyConditionEnum.REMODELED,
        label: "NewProperty.physicalDetails.form.condition.options.remodeled",
      },
      {
        value: PropertyConditionEnum.MAINTENANCE,
        label: "NewProperty.physicalDetails.form.condition.options.maintenance",
      },
    ],
  },
  {
    name: "furnished",
    label: "NewProperty.physicalDetails.form.furnished.label",
    type: "switch",
    required: false,
  },
  {
    name: "pets",
    label: "NewProperty.physicalDetails.form.pets.label",
    type: "switch",
    required: false,
  },
];

export const financialInformationFields: FormField<
  keyof CreatePropertySchema
>[] = [
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
    placeholder: "NewProperty.financialInformation.form.monthlyFee.placeholder",
    required: false,
  },
];

export const createPropertySections = [
  {
    id: "1",
    controls: mainInformationFields,
    title: "NewProperty.mainInformation.title",
  },
  {
    id: "2",
    controls: physicalDetailsFields,
    title: "NewProperty.physicalDetails.title",
  },
  {
    id: "3",
    controls: financialInformationFields,
    title: "NewProperty.financialInformation.title",
  },
];
