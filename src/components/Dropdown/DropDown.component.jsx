import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCollection } from "../../store/cart/cart.selector.js";
import Button from "../Buttons/button.component";
import { useDispatch } from "react-redux";
import { setIsExpanded } from "../../store/cart/cart.reducer.js";
import CartItem from "../Cart-Item/cart-item.component";
import {
	CartDropDownContainer,
	EmptyMessage,
	CartItems,
    CloseBtn
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
                <CloseBtn onClick={()=>{dispatch(setIsExpanded(false))}}>X</CloseBtn>
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
