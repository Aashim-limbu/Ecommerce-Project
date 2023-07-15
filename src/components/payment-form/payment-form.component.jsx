import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/user/user.selector";
import { selectCartTotal } from "../../store/cart/cart.selector";
import Button, { BUTTON_TYPE } from "../Buttons/button.component";
import { FormContainer, PaymentFormContainer } from "./payment-form.style";
export default function PaymentForm() {
	const user = useSelector(selectUser);
	const amount = useSelector(selectCartTotal);
	const [isProcessing, setIsProcessing] = useState(false);
	const stripe = useStripe();
	const elements = useElements();
    console.log(user)
	async function paymentHandler(e) {
		e.preventDefault();
		if (!stripe || !elements) {
			return;
		}
		setIsProcessing(true);
		const response = await fetch("/.netlify/functions/create-payment-intent", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				amount: amount * 100,
				description: "This is the first",
			}),
		}).then((res) => res.json());
        const {paymentIntent:{client_secret}} = response;
		const paymentResult = await stripe.confirmCardPayment(client_secret, {
			payment_method: {
				card: elements.getElement(CardElement),
				billing_details: {
					name: user ? user.displayName : "Guest",
				},
			},
		});
		setIsProcessing(false);
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
				<Button disabled={isProcessing} buttonType={BUTTON_TYPE.inverted}>
					Pay
				</Button>
			</FormContainer>
		</PaymentFormContainer>
	);
}
