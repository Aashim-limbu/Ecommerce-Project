import styled from "styled-components";

export const BackgroundImage = styled.div`
	width: 100%;
	height: 100%;
	background-size: cover;
	background-position: center;
	background-image: ${({ imageurl }) => `url(${imageurl})`};
`;

export const Body = styled.div`
	padding: 1rem;
	text-transform: capitalize;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
	background-color: white;
	opacity: 0.7;
	position: absolute;
	border-radius: 0.4rem;
	cursor: pointer;
	user-select: none;

	h2 {
		font-weight: bold;
		margin: 0 6px 0;
		font-size: 2rem;
		color: #4a4a4a;
	}

	p {
		font-weight: lighter;
		font-size: 1.5rem;
	}

	@media screen and (max-width: 768px) {
		padding: 0.8rem;
		h2 {
			font-size: 1.5rem;
		}
		p {
			font-size: 1.2rem;
		}
	}
`;

export const DirectoryContainer = styled.div`
	min-width: 29%;
	max-height: 30rem;
	flex: 1 1 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
	overflow: hidden;
	border-radius: 1rem;

	&:hover {
		cursor: pointer;

		& ${BackgroundImage} {
			filter: blur(3px);
			transform: scale(1.1);
			transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
		}

		& ${Body} {
			opacity: 0.9;
			transform: scale(1.2);
			transition: transform 2s ease-out;
		}
	}

	&:first-child {
		margin-right: 7.5px;
	}

	&:last-child {
		margin-left: 7.5px;
	}

	@media screen and (max-width: 768px) {
		min-width: 80%;
		margin: 0 auto;
        height:49%;
		margin-bottom: 20px;

		${BackgroundImage} {
			filter: none;
			transform: none;
		}

		${Body} {
			opacity: 0.9;
			transform: none;
		}
	}

	@media screen and (min-width: 769px) and (max-width: 1024px) {
		min-width: 45%;
		margin: 0 10px;
	}

	@media screen and (min-width: 1025px) {
		min-width: 29%;
		margin: 0 7.5px;

		&:first-child {
			margin-right: 0;
		}

		&:last-child {
			margin-left: 0;
		}
	}
`;
