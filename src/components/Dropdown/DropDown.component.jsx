import "./DropDown.style.scss";
import CartContext from "../../context/cart-item-context";
import { useContext } from "react";
import Button from "../Buttons/button.component";
import CartItem from "../Cart-Item/cart-item.component";
export default function DropDown() {
  const {Collection} = useContext(CartContext)
  const listItem = Collection.map(item=><CartItem key={item.id} cartItem={item}/>)
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {listItem}
      </div>
        <Button>GO TO CHECKOUT</Button>
    </div>
  );
}
