import { useProductContext } from "@entities/index";

export const useCartList = () => {
  const { setProductState } = useProductContext();

  const updateCountProduct = (id: string, operator: "+" | "-") => {
    if (operator === "+") {
      setProductState((prev) => {
        return {
          cards: [
            ...prev.cards.map((product) => {
              return product.id === id
                ? { ...product, quantity: product.quantity + 1 }
                : product;
            }),
          ],
        };
      });
    }
    if (operator === "-") {
      setProductState((prev) => {
        return {
          cards: prev.cards.map((product) => {
            return product.id === id && product.quantity > 1
              ? { ...product, quantity: product.quantity - 1 }
              : product;
          }),
        };
      });
    }
  };

  return { updateCountProduct };
};
