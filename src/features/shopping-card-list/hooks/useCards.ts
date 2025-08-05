import { useProductContext } from "@entities/product/service/useProductContext";
import { useState } from "react";
import { fetchProducts } from "../api/fetchProducts";

export const useCards = () => {
  const { productState, setProductState } = useProductContext();

  const [isLoading, setIsLoading] = useState<null | boolean>(false);

  const initCards = async () => {
    setIsLoading(true);
    const products = await fetchProducts();

    setIsLoading(false);
    setProductState({ cards: [...products] });
  };

  return {
    initCards,
    isLoading,
    productState,
  };
};
