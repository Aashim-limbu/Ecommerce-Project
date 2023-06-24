import { takeLatest, all, call, put } from "redux-saga/effects";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { fetchCategorySuccess, fetchCategoryError } from "./category.action";
import { CATEGORIES_ACTION_TYPE } from "./category.types";

export function* fetchCategoryAsync() {
	try {
		const categoryArray = yield call(getCategoriesAndDocuments);
		yield put(fetchCategorySuccess(categoryArray));
	} catch (error) {
		yield put(fetchCategoryError(error));
	}
}
export function* onFetchCategories() {
	yield takeLatest(
		CATEGORIES_ACTION_TYPE.FETCH_CATEGORY_START,
		fetchCategoryAsync
	);
}
export function* categoriesSaga() {
	yield all([call(onFetchCategories)]);
}
