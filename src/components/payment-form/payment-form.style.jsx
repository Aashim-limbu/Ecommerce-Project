import styled from "styled-components";
import { CardElement } from "@stripe/react-stripe-js";
import Button from "../Buttons/button.component";
export const PaymentFormContainer = styled.div`
	height: 300px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const FormContainer = styled.form`
	height: 150px;
	min-width: 600px;
	h2 {
		margin-bottom: 1.5rem;
	}
`;

export const StyledCardElement = styled(CardElement)`
	height: 60px;
	padding: 10px;
`;

export const PaymentButton = styled(Button)`
	margin-left: auto;
	margin-top: 30px;
`;
