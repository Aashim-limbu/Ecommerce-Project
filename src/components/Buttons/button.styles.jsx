import styled, { css } from "styled-components";

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
	border-radius: 0.2rem;
	cursor: pointer;
	display: flex;
	justify-content: center;
	font-family: "Open Sans Condensed";
	text-transform: uppercase;

	&:focus {
		outline: none;
	}

	&:hover {
		transition: background-color 0.2s ease;
	}
`;

export const BaseButton = styled.button`
	${buttonStyles}
	background-color: #0d161b;
	color: white;

	&:hover {
		background-color: white;
		color: #0d161b;
		border: 1px solid #0d161b;
	}

	@media screen and (max-width: 768px) {
		width: 100%;
		margin-top: 0.5rem;
	}
`;

export const SecondaryButton = styled(BaseButton)`
	background-color: #00aaff;
	color: white;

	&:hover {
		background-color: #0096ff;
		color: #003366;
		border: none;
	}

	@media screen and (max-width: 768px) {
		width: 100%;
		margin-top: 0.5rem;
	}
`;

export const InvertedButton = styled(BaseButton)`
	&.inverted {
		background-color: white;
		color: black;
		border: 1px solid black;

		&:hover {
			background-color: #0d161b;
			color: white;
			border: none;
		}
	}

	@media screen and (max-width: 768px) {
		width: 100%;
		margin-top: 0.5rem;
	}
`;
