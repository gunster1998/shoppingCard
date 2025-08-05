import { createContext } from "react";
import { CartContextType } from "@entities/index";

export const CartContext = createContext<CartContextType | null>(null);
