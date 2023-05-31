import "./DropDown.style.scss";
import CartContext from "../../context/cart-item-context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Buttons/button.component";
import CartItem from "../Cart-Item/cart-item.component";
export default function DropDown() {
  const navigate = useNavigate()
  function handleClick(){
    navigate('/checkout')
  }
  const {Collection} = useContext(CartContext)
  const listItem = Collection.map(item=><CartItem key={item.id} cartItem={item}/>)
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {listItem}
      </div>
        <Button onClick={handleClick}>GO TO CHECKOUT</Button>
    </div>
  );
}
