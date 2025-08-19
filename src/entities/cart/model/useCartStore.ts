import { create } from "zustand";
import { Cart } from "@entities/index";

export const useCartStore = create<Cart>((set) => ({
  purchase: [],
  setPurchase: (purchase) => set({ purchase }),
}));
