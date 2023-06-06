import {
	CartDropDownContainer,
	EmptyMessage,
	CartItems,
} from "./DropDown.style.jsx";
import CartContext from "../../context/cart-item-context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Buttons/button.component";
import CartItem from "../Cart-Item/cart-item.component";
export default function DropDown() {
	const navigate = useNavigate();
	function handleClick() {
		navigate("/checkout");
		setIsExpanded(false);
	}
	const { Collection, setIsExpanded } = useContext(CartContext);
	const listItem = Collection.map((item) => (
		<CartItem key={item.id} cartItem={item} />
	));
	return (
		<CartDropDownContainer>
			<CartItems>
				{Collection.length ? (
					listItem
				) : (
					<EmptyMessage>Add An Item</EmptyMessage>
				)}
			</CartItems>
			<Button onClick={handleClick}>GO TO CHECKOUT</Button>
		</CartDropDownContainer>
	);
}
