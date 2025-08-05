import { ProductContext } from "@entities/index";
import { Products } from "@entities/index";
import { useState } from "react";

export const ProductContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [productState, setProductState] = useState<Products>({ cards: [] });

  return (
    <ProductContext value={{ productState, setProductState }}>
      {children}
    </ProductContext>
  );
};
