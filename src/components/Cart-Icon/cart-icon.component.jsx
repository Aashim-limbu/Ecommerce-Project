import { useSelector } from "react-redux";
import {
	selectIsExpanded,
	selectCartCount,
} from "../../store/cart/cart.selector.js";

import { useDispatch } from "react-redux";
import {
	CartIconContainer,
	ShoppingIconSvg,
	ItemCount,
} from "./cart-icon.style.jsx";
import { setIsExpanded } from "../../store/cart/cart.action.js";

export default function CartIcon() {
	const dispatch = useDispatch();
	const IsExpanded = useSelector(selectIsExpanded);
	const CartCount = useSelector(selectCartCount);

	function handleClick() {
		dispatch(setIsExpanded(!IsExpanded));
	}

	return (
		<CartIconContainer onClick={handleClick}>
			<ShoppingIconSvg />
			<ItemCount>{CartCount}</ItemCount>
		</CartIconContainer>
	);
}
