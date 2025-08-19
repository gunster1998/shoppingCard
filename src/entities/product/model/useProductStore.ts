import { create } from "zustand";
import { ProductsState } from "@entities/index";

export const useProductStore = create<ProductsState>((set) => ({
  cards: [],
  setProducts: (cards) => set({ cards }),
}));
