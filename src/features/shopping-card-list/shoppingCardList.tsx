import style from "./shoppingCardList.module.css";
import { Card, CardSkeleton } from "@shared/index";
import { useCart } from "@entities/index";
import { useCardList } from "./hooks/useCardList";
import { useProductQuery } from "@entities/index";

export const ShoppingCardList: React.FC = () => {
  const { addToCart, isInCart, updateCountCart, purchase } = useCart();
  const { updateCountProduct } = useCardList();
  const { cards, isPending } = useProductQuery();

  const cardsElement = cards.map((card) => {
    const isCart = isInCart(card.id);

    return (
      <Card
        key={card.id}
        id={card.id}
        title={card.title}
        description={card.description}
        price={card.price}
        category={card.category}
        image={card.image}
        rating={card.rating}
        quantity={
          isCart
            ? purchase.find((item) => item.id === card.id)?.quantity ??
              card.quantity
            : card.quantity
        }
        onButtonClick={addToCart}
        onCount={isCart ? updateCountCart : updateCountProduct}
        isInCart={isCart}
      />
    );
  });

  if (isPending)
    return (
      <div className={style.cardList}>
        {Array.from({ length: 8 }).map((_, i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
    );

  return <div className={style.cardList}>{cardsElement}</div>;
};
