import style from "./promoSaleBlock.module.css";
import negr from "@assets/image/negr1.png";
import foureGirls from "@assets/image/foureGirl.png";
import twoGirls from "@assets/image/twoGirl.png";
import orangePeople from "@assets/image/orangePeople.png";
import { ButtonUi } from "@shared/index";
import { Link } from "react-router-dom";

export const PromoSaleBlock: React.FC = () => {
  return (
    <div className={style.screen}>
      <div className={style.promoSideBarLeft}>
        <img src={negr} alt="" />
      </div>
      <div className={style.promoSideBarCenter}>
        <div className={style.headerBlockCenter}>
          <img className={style.headerBlockCenterImg} src={foureGirls} alt="" />
        </div>
        <div className={style.centerBlockCenter}>
          <p className={style.ultimate}>ULTIMATE</p>
          <p className={style.sale}>SALE</p>
          <p className={style.newCollection}>NEW COLLECTION</p>
          <Link to="/shopping">
            <ButtonUi>Магазин</ButtonUi>
          </Link>
        </div>
        <div className={style.endBlockCenter}>
          <img className={style.headerBlockCenterImg} src={twoGirls} alt="" />
        </div>
      </div>
      <div className={style.promoSideBarRight}>
        <img src={orangePeople} alt="" />
      </div>
    </div>
  );
};
