import { useCartStore } from "@entities/index";
import { Purchase } from "@entities/index";
import { toast } from "sonner";
import { QuantityOperator } from "@shared/index";

export const useCart = () => {
  const { purchase, setPurchase } = useCartStore();

  const addToCart = ({ id, title, price, image, quantity = 1 }: Purchase) => {
    const existing = purchase.find((item: Purchase) => item.id === id);

    const totalToCart = existing ? existing.quantity + quantity : quantity;

    const addData = existing
      ? purchase.map((item: Purchase) =>
          item.id === id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      : [...purchase, { id, title, price, image, quantity }];

    setPurchase(addData);

    toast(`Товар ${title} добавлен в корзину`, {
      description: `Количество ${totalToCart}`,
      action: {
        label: "Скрыть",
        onClick: () => console.log("Undo"),
      },
    });
  };
  const isInCart = (id: string): boolean => {
    return purchase.some((product) => id === product.id);
  };

  const updateCountCart = (
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
      setPurchase([
        ...purchase
          .map((product) => {
            return product.id === id
              ? { ...product, quantity: product.quantity - 1 }
              : product;
          })
          .filter((productNull) => {
            return productNull.quantity > 0;
          }),
      ]);
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

  return {
    addToCart,
    isInCart,
    updateCountCart,
    deleteProduct,
    total,
    purchase,
  };
};
