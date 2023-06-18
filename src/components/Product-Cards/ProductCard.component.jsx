import "./ProductCard.style.scss";
import Button, { BUTTON_TYPE } from "../Buttons/button.component";
import { addItemToCart } from "../../store/cart/cart.action";
import { selectCollection } from "../../store/cart/cart.selector";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
export default function ProductCard({ product }) {
	const dispatch = useDispatch();
    const Collection = useSelector(selectCollection)
	const { name, imageUrl, price } = product;
	function handleClick() {
		dispatch(addItemToCart(Collection,product));
	}
	return (
		<div className="product-card-container">
			<img src={imageUrl} alt={`${name}`} />
			<div className="footer">
				<span className="name">{name}</span>
				<span className="price">Rs.{price}</span>
			</div>
			<Button buttonType={BUTTON_TYPE.inverted} onClick={handleClick}>
				ADD TO CART
			</Button>
		</div>
	);
}
