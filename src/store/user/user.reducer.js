import { USER_ACTION_TYPE } from "./user.types";
const INITIAL_STATE = {
	User: null,
};
export default function userReducer(state = INITIAL_STATE, { type, payload }) {
	console.log("Dispatched");
	switch (type) {
		case USER_ACTION_TYPE.SET_CURRENT_USER:
			return { ...state, User: payload }; 
		default:
			return state;
	}
}
