import "./cart-icon.style.jsx";
import CartContext from "../../context/cart-item-context";
import { CartIconContainer,ShoppingIconSvg,ItemCount } from "./cart-icon.style.jsx";
import { useContext } from "react";
export default function CartIcon() {
  const { IsExpanded, setIsExpanded,CartCount} = useContext(CartContext);
  function handleClick() {
    setIsExpanded(!IsExpanded);
  }
  return (
		<CartIconContainer onClick={handleClick}>
			<ShoppingIconSvg />
			<ItemCount>{CartCount}</ItemCount>
		</CartIconContainer>
	);
}
