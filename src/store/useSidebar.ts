import { create } from "zustand";

interface SidebarState {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const useSidebar = create<SidebarState>((set) => ({
  open: false,
  setOpen: (open: boolean) => set({ open }),
}));
