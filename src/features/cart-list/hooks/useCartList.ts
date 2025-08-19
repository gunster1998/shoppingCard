import { useCartStore } from "@entities/index";
import { QuantityOperator } from "@shared/index";

export const useCartList = () => {
  const { purchase, setPurchase } = useCartStore();

  const updateCountProduct = (
    id: string,
    operator: QuantityOperator.Increase | QuantityOperator.Decrease
  ) => {
    if (operator === QuantityOperator.Increase) {
      setPurchase([
        ...purchase.map((product) => {
          return product.id === id
            ? { ...product, quantity: product.quantity + 1 }
            : product;
        }),
      ]);
    }
    if (operator === QuantityOperator.Decrease) {
      setPurchase(
        purchase
          .map((product) => {
            return product.id === id
              ? { ...product, quantity: product.quantity - 1 }
              : product;
          })
          .filter((productNull) => {
            return productNull.quantity > 0;
          })
      );
    }
  };

  const deleteProduct = (id: string) => {
    setPurchase([
      ...purchase.filter((item) => {
        return item.id !== id;
      }),
    ]);
  };

  const total = purchase.reduce(
    (accum, item) => accum + item.price * item.quantity * 83,
    0
  );

  return { updateCountProduct, deleteProduct, total };
};
