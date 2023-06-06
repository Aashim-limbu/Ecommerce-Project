import { styled } from "styled-components";
import {
	BaseButton,
	SecondaryButton,
	InvertedButton,
} from "../Buttons/button.styles";
export const CartDropDownContainer = styled.div`
	position: absolute;
	width: 18rem;
	height: 23rem;
	display: flex;
	flex-direction: column;
	padding: 1rem;
	border: 1px solid black;
	background-color: white;
	top: 4rem;
	right: 0.2rem;
	z-index: 5;
	${BaseButton},
	${SecondaryButton},
	${InvertedButton},
    {
		margin-top: auto;
	}
`;
export const EmptyMessage = styled.span`
	font-size: 18px;
	margin: 50px auto;
`;
export const CartItems = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	overflow: scroll;
`;
