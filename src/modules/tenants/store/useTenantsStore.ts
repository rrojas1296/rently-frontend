import { create } from "zustand";
import type { TenantMainInformationSchema } from "../schemas/tenantMainInformation.schema";
import type { TenantsContactInformationSchema } from "../schemas/tenantsContactInformation.schema";
import type { TenantsContractInformationSchema } from "../schemas/tenantsContractInformation.schema";

interface TenantsState {
  form: {
    step1: TenantMainInformationSchema;
    step2: TenantsContactInformationSchema;
    step3: TenantsContractInformationSchema;
  };
  setStep1: (step1: TenantMainInformationSchema) => void;
  setStep2: (step2: TenantsContactInformationSchema) => void;
  setStep3: (step3: TenantsContractInformationSchema) => void;
}

export const useTenantsStore = create<TenantsState>((set) => ({
  form: {} as TenantsState["form"],
  setStep1: (step1: TenantMainInformationSchema) =>
    set(({ form }) => ({ form: { ...form, step1 } })),
  setStep2: (step2: TenantsContactInformationSchema) =>
    set(({ form }) => ({ form: { ...form, step2 } })),
  setStep3: (step3: TenantsContractInformationSchema) =>
    set(({ form }) => ({ form: { ...form, step3 } })),
}));
