import { Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";
import UserContext from "../../context/user-context";
import { ReactComponent as Logo } from "../../assets/hwsymleo.svg";
import { signUserOut } from "../../utils/firebase/firebase.utils";
import CartIcon from "../Cart-Icon/cart-icon.component";
import DropDown from "../Dropdown/DropDown.component";
import CartContext from "../../context/cart-item-context";
import {
	NavigationContainer,
	LogoContainer,
	NavLinkContainer,
	NavLink,
} from "./navigation.style.jsx";
export default function Navigation() {
	const { User } = useContext(UserContext);
	const { IsExpanded } = useContext(CartContext);
	return (
		<Fragment>
			<NavigationContainer>
				<LogoContainer to="/">
					<Logo
						style={{
							maxHeight: "3rem",
							maxWidth: "3rem",
							objectFit: "cover",
							borderRadius: "50%",
						}}
					/>
				</LogoContainer>
				<NavLinkContainer>
					<NavLink className="nav-link" to="/shop">
						SHOP
					</NavLink>
					{User ? (
						<NavLink as="span" onClick={signUserOut} className="nav-link">
							SIGN OUT
						</NavLink>
					) : (
						<NavLink className="nav-link" to="/auth">
							SIGN IN
						</NavLink>
					)}
					<CartIcon />
				</NavLinkContainer>
				{IsExpanded && <DropDown />}
			</NavigationContainer>
			<Outlet />
		</Fragment>
	);
}
