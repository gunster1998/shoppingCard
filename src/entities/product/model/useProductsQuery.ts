import { useQuery } from "@tanstack/react-query";
import { ProductsApi } from "../api/productsApi";
import type { Card } from "@entities/index";
import { useEffect } from "react";
import { useProductStore } from "@entities/index";
import { KEYS } from "@shared/index";
export const useProductQuery = () => {
  const { cards, setProducts } = useProductStore();

  const { data, isSuccess, isError, isPending } = useQuery<Card[]>({
    queryKey: [KEYS.product],
    queryFn: ProductsApi.getProducts,
    staleTime: 1000 * 60 * 5,
  });

  useEffect(() => {
    if (isSuccess && data) {
      setProducts(data);
    }
  }, [isSuccess, data, setProducts]);

  return { cards, isSuccess, isError, isPending };
};
