import { useProductContext } from "@entities/index";
import { QuantityOperator } from "@shared/index";

export const useCardList = () => {
  const { setProductState } = useProductContext();

  const updateCountProduct = (
    id: string,
    operator: QuantityOperator.Increase | QuantityOperator.Decrease
  ) => {
    if (operator === QuantityOperator.Increase) {
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

    if (operator === QuantityOperator.Decrease) {
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
