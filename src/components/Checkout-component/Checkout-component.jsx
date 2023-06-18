import { TfiPlus, TfiMinus, TfiClose } from "react-icons/tfi";
import {
	addItemToCart,
	clearOutItem,
	removeItemFromCart,
} from "../../store/cart/cart.action";
import { useDispatch, useSelector } from "react-redux";
import { selectCollection } from "../../store/cart/cart.selector";
export default function CheckOutItem({ product }) {
	const Collection = useSelector(selectCollection);
	const dispatch = useDispatch();
	const { id, imageUrl, name, quantity, price } = product;
	function handleClick(product) {
		dispatch(clearOutItem(Collection, product));
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
						dispatch(removeItemFromCart(Collection,product));
					}}
				>
					<TfiMinus />
				</span>
				{quantity}
				<span
					className="icon"
					onClick={() => {
						dispatch(addItemToCart(Collection,product));
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
