import { useState, createContext } from "react";
const CartContext = createContext();

export function CartProvider({ children }) {
  const [IsExpanded, setIsExpanded] = useState(false);
  console.log(IsExpanded)
  const valueToShare = {
    IsExpanded,
    setIsExpanded,
  };
  return (
    <CartContext.Provider value={valueToShare}>{children}</CartContext.Provider>
  );
}
export default CartContext;
