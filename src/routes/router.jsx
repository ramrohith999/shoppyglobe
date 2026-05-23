import { createBrowserRouter } from "react-router-dom";

import App from "../App";

import { lazy, Suspense } from "react";

import Loader from "../components/Loader";

const ProductList = lazy(() =>
  import("../components/ProductList")
);

const ProductDetail = lazy(() =>
  import("../components/ProductDetail")
);

const Cart = lazy(() =>
  import("../components/Cart")
);

const Checkout = lazy(() =>
  import("../components/Checkout")
);

const NotFound = lazy(() =>
  import("../components/NotFound")
);

const withSuspense = (Component) => (
  <Suspense fallback={<Loader />}>
    <Component />
  </Suspense>
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: withSuspense(NotFound),

    children: [
      {
        index: true,
        element: withSuspense(ProductList),
      },

      {
        path: "product/:id",
        element: withSuspense(ProductDetail),
      },

      {
        path: "cart",
        element: withSuspense(Cart),
      },

      {
        path: "checkout",
        element: withSuspense(Checkout),
      },
    ],
  },
]);