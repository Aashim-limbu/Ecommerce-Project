import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCollection } from "../../store/cart/cart.selector.js";
import Button from "../Buttons/button.component";
import { setIsExpanded } from "../../store/cart/cart.action.js";
import { useDispatch } from "react-redux";
import CartItem from "../Cart-Item/cart-item.component";
import {
	CartDropDownContainer,
	EmptyMessage,
	CartItems,
} from "./DropDown.style.jsx";
export default function DropDown() {
	const Collection = useSelector(selectCollection);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	function handleClick() {
		navigate("/checkout");
		dispatch(setIsExpanded(false));
	}
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
