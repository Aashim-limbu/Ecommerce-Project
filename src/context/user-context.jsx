import { createContext, useEffect, useReducer } from "react";
import {
	onAuthUserStateChangedListener,
	createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";
const UserContext = createContext();
const USER_ACTION_TYPE = {
	SET_CURRENT_USER: "SET_CURRENT_USER",
};
function userReducer(state, action) {
	const { type, payload } = action;
	console.log("Dispatched");
	switch (type) {
		case USER_ACTION_TYPE.SET_CURRENT_USER:
			return {
				...state,
				User: payload,
			};
		default:
			throw new Error(`UnRecognised type ${type} in the useReducer`);
	}
}
export function UserProvider({ children }) {
	// const [User, setUser] = useState(null);
	const [{ User }, dispatch] = useReducer(userReducer, {
		User: null,
	});
	function setUser(user) {
		dispatch({ type: USER_ACTION_TYPE.SET_CURRENT_USER, payload: user });
	}
	useEffect(() => {
		const unsubscribe = onAuthUserStateChangedListener(async (user) => {
			if (user) {
				await createUserDocumentFromAuth(user);
			}
			setUser(user);
		});
		return () => unsubscribe();
	}, []);
	const valueToShare = {
		User,
		setUser,
	};
	return (
		<UserContext.Provider value={valueToShare}>{children}</UserContext.Provider>
	);
}
export default UserContext;
