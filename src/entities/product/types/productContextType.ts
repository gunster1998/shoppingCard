import { Products } from "./productType";
import { SetStateAction } from "react";

export interface productContextType {
  productState: Products;
  setProductState: React.Dispatch<SetStateAction<Products>>;
}
