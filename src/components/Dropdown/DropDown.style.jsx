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
	${InvertedButton} {
		margin-top: auto;
	}

	@media (max-width: 768px) {
		width: 14rem;
		height: 20rem;
		top: 3.5rem;
		right: 0.1rem;
	}

	@media (max-width: 480px) {
		width: 12rem;
		height: 18rem;
		top: 3rem;
		right: 0rem;
		padding: 0.8rem;
	}
`;

export const EmptyMessage = styled.span`
	font-size: 18px;
	margin: 50px auto;

	@media (max-width: 768px) {
		font-size: 16px;
		margin: 40px auto;
	}

	@media (max-width: 480px) {
		font-size: 14px;
		margin: 30px auto;
	}
`;

export const CartItems = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	overflow: scroll;

	@media (max-width: 768px) {
		height: 90%;
	}

	@media (max-width: 480px) {
		height: 80%;
	}
`;
