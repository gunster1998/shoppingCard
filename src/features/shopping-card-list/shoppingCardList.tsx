import style from "./shoppingCardList.module.css";
import { ShoppingCard } from "@features/index";
import { useCards } from "./hooks/useCards";
import { useEffect } from "react";

export const ShoppingCardList: React.FC = () => {
  const { initCards, isLoading, productState } = useCards();

  useEffect(() => {
    initCards();
  }, []);
  console.log(productState);
  const cards = productState.cards.map((card) => {
    return (
      <ShoppingCard
        key={card.id}
        id={card.id}
        title={card.title}
        description={card.description}
        price={card.price}
        category={card.category}
        image={card.image}
        rating={card.rating}
      ></ShoppingCard>
    );
  });
  if (isLoading)
    return (
      <>
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
            stroke-width="6"
            stroke-linecap="round"
            cx="33"
            cy="33"
            r="30"
          ></circle>
        </svg>
      </>
    );
  return (
    <>
      <div className={style.cardList}>{cards}</div>
    </>
  );
};
