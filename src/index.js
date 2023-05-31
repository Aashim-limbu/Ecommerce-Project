import React from "react";
import { UserProvider } from "./context/user-context";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ShopProvider } from "./context/shop-item-context";
import { CartProvider } from "./context/cart-item-context";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ShopProvider>
      <UserProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </UserProvider>
    </ShopProvider>
  </BrowserRouter>
);
