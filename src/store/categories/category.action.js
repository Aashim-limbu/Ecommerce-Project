import createAction from "../../utils/reducer/reducer.utils";
import { CATEGORIES_ACTION_TYPE } from "./category.types";
export function fetchCategoryStart() {
	return createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORY_START);
}
export function fetchCategorySuccess(categoriesArray) {
	return createAction(
		CATEGORIES_ACTION_TYPE.FETCH_CATEGORY_SUCCESS,
		categoriesArray
	);
}
export function fetchCategoryError(error) {
	return createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORY_FAILED, error);
}
