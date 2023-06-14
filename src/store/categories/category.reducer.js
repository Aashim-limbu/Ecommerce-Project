import { CATEGORIES_ACTION_TYPE } from "./category.types";
export const CATEGORIES_INITIAL_STATE = {
	categories: [],
};
export default function categoriesReducer(state = CATEGORIES_INITIAL_STATE, action = {}) {
	const { type, payload } = action;
	switch (type) {
		case CATEGORIES_ACTION_TYPE.SETCATEGORIES:
			return {
				...state,
				categories: payload,
			};
		default:
			return state;
	}
}
