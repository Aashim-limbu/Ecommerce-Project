import { CATEGORIES_ACTION_TYPE } from "./category.types";
export const CATEGORIES_INITIAL_STATE = {
	categoriesMap: {},
};
export default function categoriesReducer(state = CATEGORIES_INITIAL_STATE, action = {}) {
	const { type, payload } = action;
	switch (type) {
		case CATEGORIES_ACTION_TYPE.SETCATEGORYMAP:
			return {
				...state,
				categoriesMap: payload,
			};
		default:
			return state;
	}
}
