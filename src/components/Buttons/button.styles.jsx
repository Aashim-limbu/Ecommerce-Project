import styled, { css } from "styled-components";
import {SpinnerContainer} from '../loading/spinner.styles'
const buttonStyles = css`
	min-width: 165px;
	width: auto;
	height: 50px;
	letter-spacing: 0.5px;
	line-height: 50px;
	padding: 0 35px;
	font-size: 15px;
	font-weight: bolder;
	border: none;
	border-radius: 0.5rem;
	cursor: pointer;
	display: flex;
	justify-content: center;
    align-items:center;
	text-transform: uppercase;
	word-wrap: break-word;
	overflow-wrap: break-word;
	margin-top: 0.5rem;
	transition: color, background-color, box-shadow 0.2s ease;
	&:focus {
		outline: none;
	}

	&:hover {
		transition: background-color 0.2s ease;
	}
	@media screen and (max-width: 768px) {
		width: 100%;
		margin-top: 0.5rem;
		font-size: 0.5rem;
	}
`;

export const BaseButton = styled.button`
	${buttonStyles}
	background-color: white;
	color: #0d161b;
	box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
		rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
		rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
	&:hover {
		background-color: white;
		color: #034c67;
		box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
			rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
	}
`;

export const SecondaryButton = styled(BaseButton)`
	background-color: white;
	color: #00aaff;
	box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;

	&:hover {
		background-color: #1e90ff;
		box-shadow: none;
		color: white;
		border: none;
	}
`;

export const InvertedButton = styled(BaseButton)`
	background-color: #f5fffa;
	color: #778899;
	box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;

	&:hover {
		background-color: #0d161b;
		color: white;
		border: none;
	}
`;
export const ButtonSpinner = styled(SpinnerContainer)`
width:1.5rem;
height:1.5rem;
`
