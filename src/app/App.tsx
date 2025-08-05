import style from "./App.module.css";
import { AppRoutes } from "./routes/ui/routes";
import { ProductContextProvider } from "./providers/productProvider";
import { CartStateProvider } from "@app/index";
function App() {
  return (
    <div className={style.global}>
      <CartStateProvider>
        <ProductContextProvider>
          <AppRoutes />
        </ProductContextProvider>
      </CartStateProvider>
    </div>
  );
}

export default App;
