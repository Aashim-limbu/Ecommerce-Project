import styled from "styled-components";
export const BackgroundImage = styled.div`
	width: 100%;
	height: 100%;
	background-size: cover;
	background-position: center;
	background-image: ${({imageurl}) => `url(${imageurl})`};
`;
export const Body = styled.div`
	height: 90px;
	padding: 0 25px;
	display: flex;
	flex-direction: column;
	text-transform: capitalize;
	align-items: center;
	justify-content: center;
	border: 1px solid black;
	background-color: white;
	opacity: 0.7;
	position: absolute;
	border-radius: 0.4rem;
	h2 {
		font-weight: bold;
		margin: 0 6px 0;
		font-size: 22px;
		color: #4a4a4a;
	}

	p {
		font-weight: lighter;
		font-size: 16px;
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
	border-radius: 0.4rem;

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
`;
