import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
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
		const response = await fetch("/.netlify/functions/create-payment-intent", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				amount: 100,
				description: "This is the first",
			}),
		}).then((res) => res.json());
		const clientSecret = response.paymentIntent.client_secret;

		const paymentResult = await stripe.confirmCardPayment(clientSecret, {
			payment_method: {
				card: elements.getElement(CardElement),
				billing_details: {
					name: "Aashim Limbu",
				},
			},
		});
		if (paymentResult.error) {
			alert(paymentResult.error.message);
		} else {
			if (paymentResult.paymentIntent.status === "succeeded") {
				alert("Payment Successful!");
			}
		}
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
