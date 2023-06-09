import "./ProductCard.style.scss";
import Button,{BUTTON_TYPE} from "../Buttons/button.component";
import { useContext } from "react";
import CartContext from "../../context/cart-item-context";
export default function ProductCard({ product }) {
  const { addItemToCart } = useContext(CartContext);
  const { name, imageUrl, price } = product;
  function handleClick() {
    addItemToCart(product);
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
