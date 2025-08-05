import { useCartContext } from "@entities/index";
import { Cart, Purchase } from "@entities/index";

export const useCards = () => {
  const { setCartState } = useCartContext();
  const addToCart = ({ id, title, price, image, quantity }: Purchase) => {
    setCartState((prev: Cart) => {
      const existing = prev.purchase.find((item: Purchase) => item.id === id);
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
  };

  return { addToCart };
};
