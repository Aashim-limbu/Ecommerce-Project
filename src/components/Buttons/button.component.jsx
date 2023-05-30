import './button.styles.scss'
const BUTTON_TYPE = {
  secondary: "secondary",
  inverted: "inverted",
};
export default function Button({ children ,buttonType ,...otherProps}) {
  return <button className={`button-container ${BUTTON_TYPE[buttonType]}`} {...otherProps}>{children}</button>;
}
