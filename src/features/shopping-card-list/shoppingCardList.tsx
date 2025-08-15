import style from "./shoppingCardList.module.css";
import { Card } from "@shared/index";
import { useCart } from "@entities/index";
import { useCartList } from "./hooks/useCards";
import { useProductQuery } from "@entities/index";

export const ShoppingCardList: React.FC = () => {
  const { addToCart } = useCart();
  const { updateCountProduct } = useCartList();
  const { productState, isSuccess, isError, isPending } = useProductQuery();

  const cards = productState.cards.map((card) => {
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
        quantity={card.quantity}
        onButtonClick={addToCart}
        onCount={updateCountProduct}
      />
    );
  });
  if (isPending)
    return (
      <div className={style.wrap}>
        <svg
          className="spinner"
          width="65px"
          height="65px"
          viewBox="0 0 66 66"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            className={style.path}
            fill="none"
            strokeWidth="6"
            strokeLinecap="round"
            cx="33"
            cy="33"
            r="30"
          ></circle>
        </svg>
      </div>
    );
  return (
    <>
      <div className={style.cardList}>{cards}</div>
    </>
  );
};
