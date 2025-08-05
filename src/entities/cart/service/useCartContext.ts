import { CartContext } from "@entities/cart/service/cartContext";
import { useContext } from "react";

export const useCartContext = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCartContext должен использоваться только в CartContext"
    );
  }
  return context;
};
