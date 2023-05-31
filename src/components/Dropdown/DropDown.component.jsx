import "./DropDown.style.scss";
import Button from "../Buttons/button.component";
export default function DropDown() {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        <Button>GO TO CHECKOUT</Button>
      </div>
    </div>
  );
}
