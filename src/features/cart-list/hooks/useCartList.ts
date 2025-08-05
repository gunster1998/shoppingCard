import { useCartContext } from "@entities/index";

export const useCartList = () => {
  const { cartState, setCartState } = useCartContext();

  const updateCountProduct = (id: string, operator: "+" | "-") => {
    if (operator === "+") {
      setCartState((prev) => {
        return {
          purchase: [
            ...prev.purchase.map((product) => {
              return product.id === id
                ? { ...product, quantity: product.quantity + 1 }
                : product;
            }),
          ],
        };
      });
    }
    if (operator === "-") {
      setCartState((prev) => {
        return {
          purchase: prev.purchase
            .map((product) => {
              return product.id === id
                ? { ...product, quantity: product.quantity - 1 }
                : product;
            })
            .filter((productNull) => {
              return productNull.quantity > 0;
            }),
        };
      });
    }
  };
  const deleteProduct = (id: string) => {
    setCartState((prev) => {
      return {
        purchase: [
          ...prev.purchase.filter((item) => {
            return item.id !== id;
          }),
        ],
      };
    });
  };

  const total = () => {
    const summa = cartState.purchase.reduce(
      (accum, item) => accum + item.price * item.quantity * 83,
      0
    );
    return summa;
  };

  return { updateCountProduct, deleteProduct, total };
};
