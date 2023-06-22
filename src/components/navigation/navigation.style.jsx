import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
	max-height: 10rem;
	width: 100%;
	display: flex;
	padding: 1rem;
	justify-content: space-between;
	align-items: center;
	box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
		rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

	@media (max-width: 768px) {
		flex-direction: column;
		justify-content: center;
		height: auto;
	}
`;

export const LogoContainer = styled(Link)`
	max-height: 100%;
	max-width: 3rem;

	@media (max-width: 768px) {
		margin-bottom: 1rem;
	}
`;

export const NavLinkContainer = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;

	@media (max-width: 768px) {
		width: 100%;
		justify-content: space-between;
	}
`;

export const NavLink = styled(Link)`
	padding: 10px 15px;
	cursor: pointer;

	&:hover {
		transform: scale(1.01);
		color: #0047ab;
	}

	@media (max-width: 768px) {
		padding: 10px;
	}
`;
