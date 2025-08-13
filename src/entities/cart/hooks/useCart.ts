import { useCartContext } from "@entities/index";
import { Cart, Purchase } from "@entities/index";
import { toast } from "sonner";

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

  return { addToCart };
};
