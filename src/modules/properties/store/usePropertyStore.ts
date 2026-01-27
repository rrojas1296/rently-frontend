import { create } from "zustand";
import type { MainInformationSchema } from "../schemas/mainInformation.schema";
import type { PhysicalDetailsSchema } from "../schemas/physicalDetails.schema";
import type { FinancialInformationSchema } from "../schemas/financialInformation.schema";

interface IPropertyStore {
  form: {
    step1: MainInformationSchema;
    step2: PhysicalDetailsSchema;
    step3: FinancialInformationSchema;
  };
  setStep1: (step1: MainInformationSchema) => void;
  setStep2: (step2: PhysicalDetailsSchema) => void;
  setStep3: (step3: FinancialInformationSchema) => void;
}

export const usePropertyStore = create<IPropertyStore>((set) => ({
  form: {} as IPropertyStore["form"],
  setStep1: (step1: MainInformationSchema) =>
    set(({ form }) => ({ form: { ...form, step1 } })),
  setStep2: (step2: PhysicalDetailsSchema) =>
    set(({ form }) => ({ form: { ...form, step2 } })),
  setStep3: (step3: FinancialInformationSchema) =>
    set(({ form }) => ({ form: { ...form, step3 } })),
}));
