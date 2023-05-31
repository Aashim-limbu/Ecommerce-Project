import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import UserContext from "../../context/user-context";
import { ReactComponent as Logo } from "../../assets/hwsymleo.svg";
import "./navigation.style.scss";
import { signUserOut } from "../../utils/firebase/firebase.utils";
import CartIcon from "../Cart-Icon/cart-icon.component";
import DropDown from "../Dropdown/DropDown.component";
import CartContext from "../../context/cart-item-context";
export default function Navigation() {
  const { User } = useContext(UserContext);
  const {IsExpanded } = useContext(CartContext)
  return (
    <Fragment>
      <div className="navigation ">
        <div className="logo-container">
          <Link to="/">
            <Logo className="logo" />
          </Link>
        </div>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {User ? (
            <span onClick={signUserOut} className="nav-link">
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon/>
        </div>
        {IsExpanded && <DropDown/>}
      </div>
      <Outlet />
    </Fragment>
  );
}
