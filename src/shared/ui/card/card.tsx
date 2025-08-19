import style from "./card.module.css";
import Rating from "@mui/material/Rating";
import type { Purchase } from "@entities/index";
import { ButtonUi, Spinner, QuantityOperator } from "@shared/index";
import type { Raiting } from "@entities/product/types/productType";

type cardProps = {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: Raiting;
  quantity: number;
  onButtonClick: ({ id, title, price, image, quantity }: Purchase) => void;
  onCount: (
    id: string,
    operator: QuantityOperator.Increase | QuantityOperator.Decrease
  ) => void;
  isInCart: boolean;
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
  isInCart,
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
            {!isInCart && (
              <ButtonUi
                variant="addToCart"
                style={{ margin: "0 0 0 40px" }}
                onClick={() =>
                  onButtonClick({
                    id,
                    title,
                    price: price,
                    image,
                    quantity,
                  })
                }
              >
                Добавить
              </ButtonUi>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
