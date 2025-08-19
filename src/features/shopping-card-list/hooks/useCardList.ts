import { useProductStore } from "@entities/index";
import { QuantityOperator } from "@shared/index";

export const useCardList = () => {
  const { cards, setProducts } = useProductStore();

  const updateCountProduct = (
    id: string,
    operator: QuantityOperator.Increase | QuantityOperator.Decrease
  ) => {
    if (operator === QuantityOperator.Increase) {
      setProducts([
        ...cards.map((product) => {
          return product.id === id
            ? { ...product, quantity: product.quantity + 1 }
            : product;
        }),
      ]);
    }

    if (operator === QuantityOperator.Decrease) {
      setProducts(
        cards.map((product) => {
          return product.id === id && product.quantity > 1
            ? { ...product, quantity: product.quantity - 1 }
            : product;
        })
      );
    }
  };

  return { updateCountProduct };
};
