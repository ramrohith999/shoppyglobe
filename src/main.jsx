import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import "./index.css";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            fontSize: "16px",
            padding: "16px 20px",
            borderRadius: "14px",
            fontWeight: "600",
            minWidth: "320px",
          },
        }}
      />
    </Provider>
  </React.StrictMode>,
);
