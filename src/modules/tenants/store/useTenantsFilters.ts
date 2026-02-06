import { create } from "zustand";
import type { TenantStatus } from "../types/Tenant.interface";

interface ITenantsFilters {
  status: TenantStatus | "all";
  building: string;
  nationality: string | "all";
  entryDate?: Date;
}
interface TenantsFiltersState {
  filters: ITenantsFilters;
  setFilters: (filters: ITenantsFilters) => void;
}

const initialState: ITenantsFilters = {
  status: "all",
  building: "all",
  nationality: "all",
};

export const useTenantsFilters = create<TenantsFiltersState>((set) => ({
  filters: initialState,
  setFilters: (filters) => set({ filters }),
}));
