import style from "./shoppingCard.module.css";
import Rating from "@mui/material/Rating";
import type { Card } from "@entities/index";
import { ButtonUi, QuantityInput } from "@shared/index";
import { useState } from "react";
import { useCards } from "./hooks/useCard";
export const ShoppingCard: React.FC<Card> = ({
  id,
  title,
  description,
  price,
  image,
  rating,
}) => {
  const [quantity, setquantity] = useState(1);
  const { addToCart } = useCards();

  return (
    <>
      <div className={style.card}>
        <img className={style.image} src={image} alt="" />
        <div className={style.nameRating}>
          <p className={style.name}>{title}</p>
          <Rating name="read-only" value={rating.rate} readOnly />
        </div>
        <div className={style.description}>{description}</div>
        <div className={style.inStock}>В наличии {rating.count} штук</div>
        <div className={style.price}>$ {price}</div>
        <div className={style.countAdd}>
          <QuantityInput
            quantity={quantity}
            setquantity={setquantity}
          ></QuantityInput>
          <ButtonUi
            onClick={() =>
              addToCart({ id, title, price: parseInt(price), image, quantity })
            }
          >
            Добавить
          </ButtonUi>
        </div>
      </div>
    </>
  );
};
