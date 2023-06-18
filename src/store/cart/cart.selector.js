import { createSelector } from "reselect";
function selectCartReducer(state) {
	return state.cart;
}
export const selectCollection = createSelector(
	[selectCartReducer],
	(cart) => cart.Collection
);

export const selectIsExpanded = createSelector(
	[selectCartReducer],
	(cart) => cart.IsExpanded
);

export const selectCartTotal = createSelector(
	[selectCollection],
	(Collection) =>
		Collection.reduce(
			(acc, currentValue) => acc + currentValue.quantity * currentValue.price,
			0
		)
);

export const selectCartCount = createSelector(
	[selectCollection],
	(Collection) =>
		Collection.reduce((acc, currentValue) => acc + currentValue.quantity, 0)
);
