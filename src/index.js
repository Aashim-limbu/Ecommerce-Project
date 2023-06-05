import React from "react";
import { UserProvider } from "./context/user-context";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CategoriesProvider } from "./context/Categories-context";
import { CartProvider } from "./context/cart-item-context";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <CategoriesProvider>
        <UserProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </UserProvider>
    </CategoriesProvider>
  </BrowserRouter>
);
