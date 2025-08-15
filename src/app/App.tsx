import style from "./App.module.css";
import { AppRoutes } from "./routes/ui/routes";
import { ProductContextProvider } from "./providers/productProvider";
import { CartStateProvider } from "@app/index";
import { QueryProvider } from "./providers/QueryProvider";

function App() {
  return (
    <div className={style.global}>
      <QueryProvider>
        <CartStateProvider>
          <ProductContextProvider>
            <AppRoutes />
          </ProductContextProvider>
        </CartStateProvider>
      </QueryProvider>
    </div>
  );
}

export default App;
