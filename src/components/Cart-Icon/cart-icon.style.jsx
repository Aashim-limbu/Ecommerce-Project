import styled from "styled-components";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-cart-svgrepo-com.svg";
export const ShoppingIconSvg = styled(ShoppingIcon)`
	max-width: 1.8rem;
`;
export const CartIconContainer = styled.div`
	width: 45px;
	height: 45px;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	border: 0.5px solid black;
	border-radius: 50%;
	padding: 0.2rem;
`;
export const ItemCount = styled.span`
	display: flex;
	width: 1rem;
	border-radius: 50%;
	align-items: center;
	justify-content: center;
	background-color: white;
	box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
	position: absolute;
	font-size: 0.8rem;
	font-weight: bold;
	bottom: -30%;
	right: -0.1%;
	transform: translateY(-50%);
`;
