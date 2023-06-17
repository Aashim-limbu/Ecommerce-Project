import { createSelector } from "reselect";
function selectCartReducer(state) {
	return state.cart;
}
export function selectCollection() {
	createSelector([selectCartReducer], (cart) => cart.Collection);
}
export function selectIsExpanded() {
	createSelector([selectCartReducer], (cart) => cart.IsExpanded);
}

export function selectCartTotal() {
	createSelector([selectCollection], (Collection) =>
		Collection.reduce(
			(acc, currentValue) => acc + currentValue.quantity * currentValue.price,
			0
		)
	);
}
export function selectCartCount() {
	createSelector([selectCollection], (Collection) =>
		Collection.reduce((acc, currentValue) => acc + currentValue.quantity, 0)
	);
}
