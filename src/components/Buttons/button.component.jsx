import {
	BaseButton,
	InvertedButton,
	SecondaryButton,
} from "./button.styles.jsx";
export const BUTTON_TYPE = {
    base: "base",
    secondary: "secondary",
    inverted: "inverted",
};
function getButton(buttonType = BUTTON_TYPE.base) {
    return ({
        [BUTTON_TYPE.base]: BaseButton,
		[BUTTON_TYPE.secondary]: SecondaryButton,
		[BUTTON_TYPE.inverted]: InvertedButton,
    }[buttonType]);
}
export default function Button({ children, buttonType, ...otherProps }) {
	const CustomButton = getButton(buttonType);
	return <CustomButton {...otherProps}>{children}</CustomButton>;
}
