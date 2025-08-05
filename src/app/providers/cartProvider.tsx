import { CartContext, Cart } from "@entities/index";
import { useState } from "react";

export const CartStateProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [cartState, setCartState] = useState<Cart>({ purchase: [] });

  return (
    <CartContext value={{ cartState, setCartState }}>{children}</CartContext>
  );
};
