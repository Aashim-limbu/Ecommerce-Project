import { useReducer, createContext } from "react";
import createAction from "../utils/reducer/reducer.utils";
const CartContext = createContext();

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
const CART_ACTIONS = {
	SETCARTITEMS: "SET_CART_ITEMS",
	TOGGLEEXPANDED: "TOGGLE_EXPANDED",
};
function cartReducer(state, { type, payload }) {
	switch (type) {
		case CART_ACTIONS.TOGGLEEXPANDED:
			return {
				...state,
				IsExpanded: payload,
			};
		case CART_ACTIONS.SETCARTITEMS:
			return {
				...state,
				...payload,
			};
		default:
			throw new Error(`Unhandled Error ${type} is not defined`);
	}
}
export function CartProvider({ children }) {
	const [{ Collection, IsExpanded, CartCount, Cost }, dispatch] = useReducer(
		cartReducer,
		{
			Collection: [],
			IsExpanded: false,
			CartCount: 0,
			Cost: 0,
		}
	);
	// const [IsExpanded, setIsExpanded] = useState(false);
	// const [Collection, setCollection] = useState([]);
	// const [CartCount, setCartCount] = useState(0);
	// const [Cost, setCost] = useState(0);
	// useEffect(() => {
	// 	const newCartCount = Collection.reduce((acc, currentValue) => {
	// 		return acc + currentValue.quantity;
	// 	}, 0);
	// 	setCartCount(newCartCount);
	// }, [Collection]);
	// useEffect(() => {
	// 	const newCartTotal = Collection.reduce((acc, currentValue) => {
	// 		return acc + currentValue.quantity * currentValue.price;
	// 	}, 0);
	// 	setCost(newCartTotal);
	// }, [Collection]);
	function setIsExpanded(bool) {
		dispatch(createAction(CART_ACTIONS.TOGGLEEXPANDED, bool));
	}
	function updateCartItemReducer(newCartItems) {
		const newCartTotal = newCartItems.reduce((acc, currentValue) => {
			return acc + currentValue.quantity * currentValue.price;
		}, 0);
		const newCartCount = newCartItems.reduce((acc, currentValue) => {
			return acc + currentValue.quantity;
		}, 0);
		dispatch(
			createAction(CART_ACTIONS.SETCARTITEMS, {
				Collection: newCartItems,
				CartCount: newCartCount,
				Cost: newCartTotal,
			})
		);
	}
	function addItemToCart(productToAdd) {
		const newCartItems = addItem(Collection, productToAdd);
		updateCartItemReducer(newCartItems);
	}
	function removeItemFromCart(productToRemove) {
		const newCartItems = removeProduct(Collection, productToRemove);
		updateCartItemReducer(newCartItems);
	}
	function clearOutItem(product) {
		const newCartItems = clearProduct(Collection, product);
		updateCartItemReducer(newCartItems);
	}
	const valueToShare = {
		IsExpanded,
		setIsExpanded,
		Collection,
		addItemToCart,
		CartCount,
		clearOutItem,
		removeItemFromCart,
		Cost,
	};
	return (
		<CartContext.Provider value={valueToShare}>{children}</CartContext.Provider>
	);
}
export default CartContext;
