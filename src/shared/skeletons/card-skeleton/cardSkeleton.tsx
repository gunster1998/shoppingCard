import style from "./cardSkeleton.module.css";
import { Skeleton } from "@shared/ui/skeleton";
export const CardSkeleton: React.FC = () => {
  return (
    <div className={style.card}>
      <div className={style.nameRating}>
        <Skeleton className={`h-[240px] w-full rounded-xl`} />
        <Skeleton className="h-[24px] w-full rounded-xl mt-[15px]" />
        <Skeleton className="h-[24px] w-[120px] mt-[15px] rounded-xl" />
        <Skeleton className="h-[182px] w-full mt-[15px] rounded-xl" />
      </div>

      <div className={style.end}>
        <div className={style.inStockAndPrice}>
          <Skeleton className="h-[14px] w-[120px] rounded-xl" />
          <Skeleton className="h-[34px] w-[100px] rounded-xl" />
        </div>
        <div className={style.countAdd}>
          <Skeleton className="h-[42px] w-[200px] rounded-xl" />
          <Skeleton className="h-[42px] w-[100px] rounded-xl" />
        </div>
      </div>
    </div>
  );
};
