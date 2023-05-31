import "./cart-icon.style.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-cart-svgrepo-com.svg";
import CartContext from "../../context/cart-item-context";
import { useContext } from "react";
export default function CartIcon() {
  const { IsExpanded, setIsExpanded,CartCount} = useContext(CartContext);
  function handleClick() {
    setIsExpanded(!IsExpanded);
  }
  return (
    <div className="cart-icon-container" onClick={handleClick}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{CartCount}</span>
    </div>
  );
}
