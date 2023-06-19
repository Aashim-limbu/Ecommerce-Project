import { CATEGORIES_ACTION_TYPE } from "./category.types";
export const CATEGORIES_INITIAL_STATE = {
	categories: [],
	isLoading: false,
	error: null,
};
export default function categoriesReducer(
	state = CATEGORIES_INITIAL_STATE,
	action = {}
) {
	const { type, payload } = action;
	switch (type) {
        case CATEGORIES_ACTION_TYPE.FETCH_CATEGORY_START:
            return {
                ...state,
                isLoading:true
            };
		case CATEGORIES_ACTION_TYPE.FETCH_CATEGORY_SUCCESS:
			return {
				...state,
                isLoading:false,
				categories: payload,
			};
		case CATEGORIES_ACTION_TYPE.FETCH_CATEGORY_FAILED:
			return {
				...state,
                isLoading:false,
				error:payload,
			};
		default:
			return state;
	}
}
