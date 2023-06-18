import CART_ACTIONS from "./cart.types";
import createAction from "../../utils/reducer/reducer.utils";

export function setIsExpanded(bool) {
	return createAction(CART_ACTIONS.TOGGLEEXPANDED, bool);
}
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
export function addItemToCart(Collection, productToAdd) {
	const newCartItems = addItem(Collection, productToAdd);
	return createAction(CART_ACTIONS.SETCARTITEMS, newCartItems);
}
export function removeItemFromCart(Collection, productToRemove) {
	const newCartItems = removeProduct(Collection, productToRemove);
	return createAction(CART_ACTIONS.SETCARTITEMS, newCartItems);
}
export function clearOutItem(Collection, product) {
	const newCartItems = clearProduct(Collection, product);
	return createAction(CART_ACTIONS.SETCARTITEMS, newCartItems);
}
