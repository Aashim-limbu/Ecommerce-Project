import CartContext from "../../context/cart-item-context";
import "./CheckOut.style.scss";
import { useContext } from "react";
import CheckOutItem from "../../components/Checkout-component/Checkout-component";
export default function CheckOut() {
	const { Collection, Cost } = useContext(CartContext);
	const tableHeaders = [
		{ name: "Product" },
		{ name: "Description" },
		{ name: "Quantity" },
		{ name: "Price" },
		{ name: "Remove" },
	];
	const headerList = tableHeaders.map(({ name }) => {
		return <th key={name}>{name}</th>;
	});
	const bodyList = Collection.length ? (
		Collection.map((product) => {
			return <CheckOutItem key={product.id} product={product} />;
		})
	) : (
		<tr>
			<td colSpan={5}>
				<span>Empty Cart</span>
			</td>
		</tr>
	);
	return (
		<div className="table-container">
			<table>
				<thead>
					<tr>{headerList}</tr>
				</thead>
				<tbody>{bodyList}</tbody>
				<tfoot>
					<tr>
						<td colSpan={5}>Total cost(Rs.) : {Cost}</td>
					</tr>
				</tfoot>
			</table>
		</div>
	);
}
