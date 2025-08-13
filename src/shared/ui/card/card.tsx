import style from "./card.module.css";
import Rating from "@mui/material/Rating";
import type { Purchase } from "@entities/index";
import { ButtonUi, Spinner } from "@shared/index";
import type { Raiting } from "@entities/product/types/productType";

type cardProps = {
  id: string;
  title: string;
  description: string;
  price: string;
  category: string;
  image: string;
  rating: Raiting;
  quantity: number;
  onButtonClick: ({ id, title, price, image, quantity }: Purchase) => void;
  onCount: (id: string, operator: "+" | "-") => void;
};

export const Card: React.FC<cardProps> = ({
  id,
  title,
  description,
  price,
  image,
  rating,
  quantity,
  onButtonClick,
  onCount,
}) => {
  return (
    <>
      <div className={style.card}>
        <div className={style.nameRating}>
          <img className={style.image} src={image} alt="" />
          <p className={style.name}>{title}</p>
          <Rating name="read-only" value={rating.rate} readOnly />
          <div className={style.description}>{description}</div>
        </div>

        <div className={style.end}>
          <div className={style.inStockAndPrice}>
            <div className={style.inStock}>В наличии {rating.count} штук</div>
            <div className={style.price}>$ {price}</div>
          </div>
          <div className={style.countAdd}>
            <Spinner id={id} quantity={quantity} onChange={onCount}></Spinner>
            <ButtonUi
              variant="addToCart"
              onClick={() =>
                onButtonClick({
                  id,
                  title,
                  price: parseInt(price),
                  image,
                  quantity,
                })
              }
            >
              Добавить
            </ButtonUi>
          </div>
        </div>
      </div>
    </>
  );
};
