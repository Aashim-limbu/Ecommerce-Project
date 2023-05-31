import { createContext, useState } from "react";
import SHOP_DATA from "../shop.item.json";
const ProductContext = createContext();
export function ShopProvider({ children }) {
  const [Items, setItems] = useState(SHOP_DATA);
  const valueToShare = {
    Items,
    setItems,
  };
  return (
    <ProductContext.Provider value={valueToShare}>
      {children}
    </ProductContext.Provider>
  );
}
export default ProductContext;
