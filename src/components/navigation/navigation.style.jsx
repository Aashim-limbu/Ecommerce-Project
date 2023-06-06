import styled from "styled-components";
import { Link } from "react-router-dom";
export const NavigationContainer = styled.div`
	max-height: 4rem;
	width: 100vw;
	display: flex;
    padding:1rem;
	justify-content: space-between;
	align-items: center;
	box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.3);
`;
export const LogoContainer = styled(Link)`
	max-height: 100%;
	max-width: 3rem;
`;
export const NavLinkContainer = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;
export const NavLink = styled(Link)`
	padding: 10px 15px;
	cursor: pointer;
	&:hover {
		transform: scale(1.01);
		color: #54626f;
		transition: transform 0.1s ease;
	}
`;
