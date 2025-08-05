import { ProductContext } from "@entities/product/service/productContext";
import { useContext } from "react";

export const useProductContext = () => {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error(
      "useProductContext должен использоваться только внутри ProductContext"
    );
  }
  return context;
};
