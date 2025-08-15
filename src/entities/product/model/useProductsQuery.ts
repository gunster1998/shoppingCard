import { useQuery } from "@tanstack/react-query";
import { ProductsApi } from "../api/productsApi";
import { useProductContext } from "@entities/product/service/useProductContext";
import type { Card } from "@entities/index";
import { useEffect } from "react";

export const useProductQuery = () => {
  const { productState, setProductState } = useProductContext();

  const { data, isSuccess, isError, isPending } = useQuery<Card[]>({
    queryKey: ["products"],
    queryFn: ProductsApi.getProducts,
    staleTime: 1000 * 60 * 5,
  });

  useEffect(() => {
    if (isSuccess && data) {
      setProductState({ cards: data });
    }
  }, [isSuccess, data, setProductState]);

  return { productState, isSuccess, isError, isPending };
};
