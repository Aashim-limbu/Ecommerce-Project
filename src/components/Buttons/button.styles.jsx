import styled from 'styled-components'
export const BaseButton = styled.button`
	min-width: 165px;
	width: auto;
	height: 50px;
	letter-spacing: 0.5px;
	line-height: 50px;
	padding: 0 35px 0 35px;
	font-size: 15px;
	background-color: #0d161b;
	color: white;
	text-transform: uppercase;
	font-family: "Open Sans Condensed";
	font-weight: bolder;
	border: none;
	border-radius: 0.2rem;
	cursor: pointer;
	display: flex;
	justify-content: center;
	    &:focus{
	        outline:none;
	    }
	    &:hover {
	        background-color: white;
	        color: #0d161b;
	        border: 1px solid #0d161b;
	        transition: background-color 0.2s ease;
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
`
// .button-container {
//     min-width: 165px;
//     width: auto;
//     height: 50px;
//     letter-spacing: 0.5px;
//     line-height: 50px;
//     padding: 0 35px 0 35px;
//     font-size: 15px;
//     background-color: #0d161b;
//     color: white;
//     text-transform: uppercase;
//     font-family: 'Open Sans Condensed';
//     font-weight: bolder;
//     border: none;
//     border-radius: 0.2rem;
//     cursor: pointer;
//     display: flex;
//     justify-content: center;
//     &:focus{
//         outline:none;
//     }
//     &:hover {
//         background-color: white;
//         color: #0d161b;
//         border: 1px solid #0d161b;
//         transition: background-color 0.2s ease;
//     }

//     &.secondary {
//       background-color: #00aaff;
//       color: white;

//       &:hover {
//         background-color: #0E81B9;
//         border: none;
//       }
//     }

//     &.inverted {
//       background-color: white;
//       color: black;
//       border: 1px solid black;

//       &:hover {
//         background-color: #0d161b;
//         color: white;
//         border: none;
//       }
//     }
//   }
