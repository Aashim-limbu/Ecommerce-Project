import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import { ReactComponent as Logo } from "../../assets/hwsymleo.svg";
import { signUserOut } from "../../utils/firebase/firebase.utils";
import CartIcon from "../Cart-Icon/cart-icon.component";
import DropDown from "../Dropdown/DropDown.component";
import { selectIsExpanded } from "../../store/cart/cart.selector";
import { selectUser } from "../../store/user/user.selector";
import {
	NavigationContainer,
	LogoContainer,
	NavLinkContainer,
	NavLink,
} from "./navigation.style.jsx";
export default function Navigation() {
	const User = useSelector(selectUser);
	const IsExpanded = useSelector(selectIsExpanded);
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

							boxShadow:
								"#1F75FE 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
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
