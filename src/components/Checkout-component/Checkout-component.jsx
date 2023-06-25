import { TfiPlus, TfiMinus, TfiClose } from "react-icons/tfi";
import {
	addItemToCart,
	clearOutItem,
	removeItemFromCart,
} from "../../store/cart/cart.reducer";
import { useDispatch } from "react-redux";
export default function CheckOutItem({ product }) {
	const dispatch = useDispatch();
	const { id, imageUrl, name, quantity, price } = product;
	function handleClick(product) {
		dispatch(clearOutItem(product));
	}

	return (
		<tr key={id}>
			<td>
				<img src={imageUrl} alt={`${name}`} />
			</td>
			<td>{name}</td>
			<td>
				<span
					className="icon"
					onClick={() => {
						dispatch(removeItemFromCart(product));
					}}
				>
					<TfiMinus />
				</span>
				{quantity}
				<span
					className="icon"
					onClick={() => {
						dispatch(addItemToCart(product));
					}}
				>
					<TfiPlus />
				</span>
			</td>
			<td>Rs.{price}</td>
			<td>
				<span
					className="icon"
					onClick={() => {
						handleClick(product);
					}}
				>
					<TfiClose />
				</span>
			</td>
		</tr>
	);
}
