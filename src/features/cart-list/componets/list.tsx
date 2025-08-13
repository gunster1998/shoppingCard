import style from "./list.module.css";
import { useCartList } from "../hooks/useCartList";
import { Spinner } from "@shared/index";
import { useCartContext } from "@entities/index";

export const List: React.FC = () => {
  const { cartState } = useCartContext();
  const { updateCountProduct, deleteProduct } = useCartList();

  const productsList = cartState.purchase.map((product) => {
    const price = product.price * 84;
    const totalPrice = product.price * 84 * product.quantity;

    return (
      <div key={product.id} className={style.card}>
        <div className={style.product}>
          <img className={style.imageProduct} src={product.image} alt="" />
          <div className={style.title}>
            <p className={style.titleText}>{product.title}</p>
            <a
              className={style.delete}
              onClick={() => deleteProduct(product.id)}
              href="#"
            >
              Удалить
            </a>
          </div>
        </div>
        <div className={style.price}>
          <p>{price} ₽</p>
        </div>
        <div className={style.quantity}>
          <Spinner
            id={product.id}
            quantity={product.quantity}
            onChange={updateCountProduct}
          />
        </div>

        <div className={style.totalPrice}>{totalPrice}</div>
      </div>
    );
  });

  return productsList;
};
