import { Group, FormInputLabel, Input } from "./form-input.style";
export default function FormInput({ label, ...otherProps }) {
	return (
		<Group>
			<Input {...otherProps} />
			{label && (
				<FormInputLabel shrink={otherProps.value.length}>
					{label}
				</FormInputLabel>
			)}
		</Group>
	);
}
