import { createSlice } from "@reduxjs/toolkit";
const CART_INITIAL_STATE = {
	Collection: [],
	IsExpanded: false,
};
function addItem(Collection, productToAdd) {
	const existingItem = Collection.find((i) => i.id === productToAdd.id);
	if (existingItem) {
		return Collection.map((item) =>
			item.id === productToAdd.id
				? { ...item, quantity: item.quantity + 1 }
				: item
		);
	} else {
		return [...Collection, { ...productToAdd, quantity: 1 }];
	}
}
function removeProduct(Collection, productToRemove) {
	const existingItem = Collection.find((i) => i.id === productToRemove.id);
	if (!existingItem)
		throw new Error("cannot remove the item that is not even in the list");
	if (existingItem.quantity === 1) {
		return Collection.filter((i) => i.id !== productToRemove.id);
	} else {
		return Collection.map((product) =>
			product.id === productToRemove.id
				? { ...product, quantity: product.quantity - 1 }
				: product
		);
	}
}
function clearProduct(Collection, productToClear) {
	return Collection.filter((item) => item.id !== productToClear.id);
}

export const cartSlice = createSlice({
	name: "cart",
	initialState: CART_INITIAL_STATE,
	reducers: {
		setIsExpanded(state, { payload }) {
			state.IsExpanded = payload;
		},
		addItemToCart(state, { payload }) {
			state.Collection = addItem(state.Collection, payload);
		},
		removeItemFromCart(state, { payload }) {
			state.Collection = removeProduct(state.Collection, payload);
		},
		clearOutItem(state, { payload }) {
			state.Collection = clearProduct(state.Collection, payload);
		},
	},
});
export const {
	setIsExpanded,
	addItemToCart,
	removeItemFromCart,
	clearOutItem,
} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
