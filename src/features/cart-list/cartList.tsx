import style from "./cartList.module.css";
import { useCartContext } from "@entities/index";
import { SpinnerCart, ButtonUi } from "@shared/index";
import { useCartList } from "./hooks/useCartList";

export const CartList: React.FC = () => {
  const { cartState } = useCartContext();
  const { updateCountProduct, deleteProduct, total } = useCartList();

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
          <SpinnerCart
            id={product.id}
            cartState={cartState}
            updateCountProduct={updateCountProduct}
          ></SpinnerCart>
        </div>

        <div className={style.totalPrice}>{totalPrice}</div>
      </div>
    );
  });
  const toltalCart = total();
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
          <div className={style.productList}>{productsList}</div>
        </div>
        <div className={style.total}>
          <p>Итого: {toltalCart} ₽</p>
          <ButtonUi>Заказать</ButtonUi>
        </div>
      </div>
    </>
  );
};
