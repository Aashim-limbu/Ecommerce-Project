import { useContext } from "react";
import { TfiPlus, TfiMinus, TfiClose } from "react-icons/tfi";
import CartContext from "../../context/cart-item-context";
export default function CheckOutItem({ product }) {
	const { addItemToCart, removeItemFromCart, clearOutItem } =
		useContext(CartContext);
	const { id, imageUrl, name, quantity, price } = product;
	function handleClick(product) {
		clearOutItem(product);
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
						removeItemFromCart(product);
					}}
				>
					<TfiMinus />
				</span>
				{quantity}
				<span
					className="icon"
					onClick={() => {
						addItemToCart(product);
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
