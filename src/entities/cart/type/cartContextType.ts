import { Cart } from "../type/cartType";
import { SetStateAction } from "react";

export interface CartContextType {
  cartState: Cart;
  setCartState: React.Dispatch<SetStateAction<Cart>>;
}
