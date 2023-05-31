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
function removeProduct(Collection,productToRemove){
  const existingItem = Collection.find((i) => i.id === productToRemove.id);
  if(!existingItem) throw new Error('cannot remove the item that is not even in the list')
  if(existingItem.quantity===1) {
    return Collection.filter(i=>i.id!==productToRemove.id)
  }else{
    return Collection.map(product=>product.id===productToRemove.id ?{...product,quantity:product.quantity-1}:product)
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
  function removeItemFromCart(productToRemove){
    try {
      setCollection(removeProduct(Collection,productToRemove))
    } catch (error) {
      console.error(error)
    }
  }
  const valueToShare = {
    IsExpanded,
    setIsExpanded,
    Collection,
    setCollection,
    addItemToCart,
    setCartCount,
    CartCount,
    removeItemFromCart,
  };
  return (
    <CartContext.Provider value={valueToShare}>{children}</CartContext.Provider>
  );
}
export default CartContext;
