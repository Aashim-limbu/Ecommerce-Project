import { useState, createContext, useEffect } from "react";
const CartContext = createContext();

function addItem(Collection, productToAdd) {
  const existingItem = Collection.find((i) => i.id === productToAdd.id);
  if (existingItem) {
    return Collection.map((item) =>
      item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  } else {
    return [...Collection, { ...productToAdd, quantity: 1 }];
  }
}

export function CartProvider({ children }) {
  const [IsExpanded, setIsExpanded] = useState(false);
  const [Collection, setCollection] = useState([]);
  const [CartCount, setCartCount] = useState(0);

  useEffect(() => {
    const newCartCount = Collection.reduce((acc, currentValue) => {
      return acc + currentValue.quantity;
    }, 0);
    setCartCount(newCartCount);
  }, [Collection]);
  function addItemToCart(productToAdd) {
    setCollection(addItem(Collection, productToAdd));
  }

  const valueToShare = {
    IsExpanded,
    setIsExpanded,
    Collection,
    setCollection,
    addItemToCart,
    setCartCount,
    CartCount,
  };
  return (
    <CartContext.Provider value={valueToShare}>{children}</CartContext.Provider>
  );
}
export default CartContext;
