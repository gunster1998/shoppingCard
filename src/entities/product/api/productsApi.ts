import { api } from "@shared/index";
import type { CardApi, Card } from "@entities/index";

export const ProductsApi = {
  getProducts: async (): Promise<Card[]> => {
    const { data } = await api.get<CardApi[]>("/products");

    return data.map((item) => ({ ...item, quantity: 1 }));
  },
};
