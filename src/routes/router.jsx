import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import ProductList from "../components/ProductList";
import ProductDetail from "../components/ProductDetail";
import Cart from "../components/Cart";
import Checkout from "../components/Checkout";
import NotFound from "../components/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,

    children: [
      {
        index: true,
        element: <ProductList />,
      },

      {
        path: "product/:id",
        element: <ProductDetail />,
      },

      {
        path: "cart",
        element: <Cart />,
      },

      {
        path: "checkout",
        element: <Checkout />,
      },
    ],
  },
]);