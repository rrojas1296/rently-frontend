import z from "zod";
import type { FormField } from "../../common/types/formField";
import { PropertyConditionEnum } from "../types/Property.interface";

export const physicalDetailsSchema = z.object({
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
});

export type PhysicalDetailsSchema = z.infer<typeof physicalDetailsSchema>;
export type PhysicalDetailsFields = keyof PhysicalDetailsSchema;

export const physicalDetailsControls: FormField<PhysicalDetailsFields>[] = [
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
