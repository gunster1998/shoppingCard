import style from "./App.module.css";
import { AppRoutes } from "./routes/ui/routes";
import { QueryProvider } from "./providers/QueryProvider";

function App() {
  return (
    <div className={style.global}>
      <QueryProvider>
        <AppRoutes />
      </QueryProvider>
    </div>
  );
}

export default App;
