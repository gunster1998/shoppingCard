import { useProductContext } from "@entities/product/service/useProductContext";
import { useState, useEffect } from "react";
import { fetchProducts } from "../api/fetchProducts";

const URL = "https://fakestoreapi.com/products";

export const useFetch = () => {
  const [isLoading, setIsLoading] = useState<null | boolean>(false);
  const [isError, setError] = useState<null | boolean>(false);
  const { productState, setProductState } = useProductContext();

  useEffect(() => {
    const load = async () => {
      try {
        setIsLoading(true);
        setError(false);
        const cards = await fetchProducts(URL);
        setProductState({ cards: [...cards] });
        setIsLoading(false);
      } catch (error) {
        setError(true);
        console.error("Ошибка загрузки продуктов:", error);
        throw error;
      } finally {
        setIsLoading(false);
      }
    };
    load();
  }, []);

  return { isLoading, isError, productState };
};
