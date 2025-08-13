import { RouteObject } from "react-router-dom";
import { HomePage, ShopPage, CartPage } from "@pages/index";
import { HeaderLayout } from "@app/index";
import { Toaster } from "sonner";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <HeaderLayout>
        <HomePage />
      </HeaderLayout>
    ),
  },
  {
    path: "/shopping",
    element: (
      <HeaderLayout>
        <ShopPage />
        <Toaster richColors position="top-right" />
      </HeaderLayout>
    ),
  },
  {
    path: "/cart",
    element: (
      <HeaderLayout>
        <CartPage />
      </HeaderLayout>
    ),
  },
];
