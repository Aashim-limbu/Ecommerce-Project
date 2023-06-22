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
	border-radius: 50%;
	padding: 0.2rem;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
        rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
        `;
        export const ItemCount = styled.span`
        display: flex;
        width: 1rem;
        border-radius: 50%;
        align-items: center;
        justify-content: center;
        background-color: white;
        position: absolute;
        font-size: 0.8rem;
        font-weight: bold;
        bottom: -30%;
        right: -0.1%;
        transform: translateY(-50%);
        box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
`;
