import "./CheckOut.style.scss";
import { useSelector } from "react-redux";
import {
	selectCollection,
	selectCartTotal,
} from "../../store/cart/cart.selector";
import CheckOutItem from "../../components/Checkout-component/Checkout-component";
import PaymentForm from "../../components/payment-form/payment-form.component";
export default function CheckOut() {
	const Collection = useSelector(selectCollection);
	const Cost = useSelector(selectCartTotal);
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
			<PaymentForm />
		</div>
	);
}
