import { create } from "zustand";

export type ToastType = "success" | "error" | "warning";

interface ToastState {
  open: boolean;
  type?: ToastType;
  description?: string;
  title?: string;
  setOpen: (open: boolean) => void;
  setContent: (
    content: Omit<ToastState, "open" | "setOpen" | "setContent">,
  ) => void;
}

export const useToast = create<ToastState>((set) => ({
  open: false,
  setContent: (content) => set(content),
  setOpen: (open: boolean) => set({ open }),
}));
