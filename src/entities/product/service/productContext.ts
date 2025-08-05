import type { productContextType } from "@entities/index";
import { createContext } from "react";

export const ProductContext = createContext<productContextType | null>(null);
