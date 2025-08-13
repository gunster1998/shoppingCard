import style from "./cartList.module.css";
import { List } from "./componets/list";
import { useCartList } from "./hooks/useCartList";
import { ButtonUi } from "@shared/index";

export const CartList: React.FC = () => {
  const { total } = useCartList();

  return (
    <>
      <div className={style.wrapper}>
        <div>
          <h1 className={style.namePage}>Корзина</h1>
        </div>
        <div className={style.cart}>
          <div className={style.cartHeader}>
            <p className={style.textCartHeaderOne}>Товар</p>
            <p className={style.textCartHeader}>Цена</p>
            <p className={style.textCartHeader}>Количество</p>
            <p className={style.textCartHeader}>Итого</p>
          </div>
          <hr></hr>
          <div className={style.productList}>
            <List />
          </div>
        </div>
        <div className={style.total}>
          <p>Итого: {total} ₽</p>
          <ButtonUi>Заказать</ButtonUi>
        </div>
      </div>
    </>
  );
};
