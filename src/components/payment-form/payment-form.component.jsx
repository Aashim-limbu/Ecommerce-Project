import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Button, { BUTTON_TYPE } from "../Buttons/button.component";
import { FormContainer, PaymentFormContainer } from "./payment-form.style";
export default function PaymentForm() {
	const stripe = useStripe();
	const elements = useElements();
	async function paymentHandler(e) {
		e.preventDefault();
		if (!stripe || !elements) {
			return;
		}
		const response = await fetch(`/netlify/functions/create-payment-intent`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ amount: 10000 }),
		}).then((res) =>res.json());
		console.log(response);
	}
	return (
		<PaymentFormContainer>
			<FormContainer onSubmit={paymentHandler}>
				<h2>Payment:</h2>
				<CardElement />
				<Button buttonType={BUTTON_TYPE.inverted}>Pay</Button>
			</FormContainer>
		</PaymentFormContainer>
	);
}
