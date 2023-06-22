import { styled } from "styled-components";
import {
	BaseButton,
	SecondaryButton,
	InvertedButton,
} from "../Buttons/button.styles";

export const CartDropDownContainer = styled.div`
	position: absolute;
	width: 20rem;
	max-height: 30rem;
	display: flex;
    border-radius:0.7rem;
	flex-direction: column;
	padding: 1rem;
	box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
		rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
		rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
	background-color: white;
	top: 4rem;
	right: 0.4rem;
	z-index: 5;

	${BaseButton},
	${SecondaryButton},
	${InvertedButton} {
		margin-top: auto;
	}

	@media (max-width: 768px) {
		width: 15rem;
		height: 20rem;
		top: 9rem;
		right: 0.5rem;
	}

	@media (max-width: 480px) {
		width: 12rem;
		height: 18rem;
		top: 9rem;
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
    margin-bottom:1rem;
	@media (max-width: 768px) {
		height: 90%;
	}

	@media (max-width: 480px) {
		height: 80%;
	}
`;
export const CloseBtn = styled.span`
	background-color: #0070bb;
	color: white;
	border-radius: 50%;
	cursor: pointer;
	font-size: 1rem;
	position: absolute;
	top: 0.1rem;
	right: 0.2rem;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.2rem;
	width: 1.5rem;
	&:hover {
		font-weight: bold;
	}
`;
