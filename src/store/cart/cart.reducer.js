import CART_ACTIONS from "./cart.types";
const CART_INITIAL_STATE = {
	Collection: [],
	IsExpanded: false,
};
export default function cartReducer(
	state = CART_INITIAL_STATE,
	{ type, payload }
) {
	switch (type) {
		case CART_ACTIONS.TOGGLEEXPANDED:
			return {
				...state,
				IsExpanded: payload,
			};
		case CART_ACTIONS.SETCARTITEMS:
			return {
				...state,
				Collection:payload,
			};
		default:
			return state;
	}
}
