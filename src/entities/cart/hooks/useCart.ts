import { useCartContext } from "@entities/index";
import { Cart, Purchase } from "@entities/index";
import { toast } from "sonner";
import { QuantityOperator } from "@shared/index";

export const useCart = () => {
  const { cartState, setCartState } = useCartContext();

  const addToCart = ({ id, title, price, image, quantity }: Purchase) => {
    const existing = cartState.purchase.find(
      (item: Purchase) => item.id === id
    );

    const totalToCart = existing ? existing.quantity + quantity : quantity;

    setCartState((prev: Cart) => {
      if (existing) {
        return {
          purchase: prev.purchase.map((item: Purchase) => {
            if (item.id === id) {
              return { ...item, quantity: item.quantity + quantity };
            } else {
              return item;
            }
          }),
        };
      }

      return {
        purchase: [...prev.purchase, { id, title, price, image, quantity }],
      };
    });

    toast(`Товар ${title} добавлен в корзину`, {
      description: `Количество ${totalToCart}`,
      action: {
        label: "Скрыть",
        onClick: () => console.log("Undo"),
      },
    });
  };
  const isInCart = (id: string): boolean => {
    return cartState.purchase.some((product) => id === product.id);
  };

  const updateCountCart = (
    id: string,
    operator: QuantityOperator.Increase | QuantityOperator.Decrease
  ) => {
    if (operator === QuantityOperator.Increase) {
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
    if (operator === QuantityOperator.Decrease) {
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

  const total = cartState.purchase.reduce(
    (accum, item) => accum + item.price * item.quantity * 83,
    0
  );

  return {
    addToCart,
    isInCart,
    updateCountCart,
    deleteProduct,
    total,
    cartState,
  };
};
