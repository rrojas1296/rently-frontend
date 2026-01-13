import z from "zod";
import { PropertyStatusEnum } from "../types/Property.interface";
import type { FormField } from "../../common/types/formField";

export const mainInformationSchema = z.object({
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
});

export type MainInformationSchema = z.infer<typeof mainInformationSchema>;
export type MainInformationFields = keyof MainInformationSchema;

export const mainInformationControls: FormField<MainInformationFields>[] = [
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
    name: "area",
    label: "NewProperty.mainInformation.form.area.label",
    placeholder: "NewProperty.mainInformation.form.area.placeholder",
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
