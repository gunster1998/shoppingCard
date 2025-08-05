import style from "./header.module.css";
import { Link } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export const Header: React.FC = () => {
  return (
    <header className={style.header}>
      <Link className={style.logo} to="/">
        ODIN
      </Link>
      <div className={style.right}>
        <nav className={style.menuList}>
          <Link className={style.element} to="/">
            Главная
          </Link>
          <Link className={style.element} to="/shopping">
            Магазин
          </Link>
        </nav>
        <Link to="/cart">
          <button className={style.shoppingCard}>
            <AddShoppingCartIcon sx={{ color: "white" }}></AddShoppingCartIcon>
          </button>
        </Link>
      </div>
    </header>
  );
};
