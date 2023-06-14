import Navigation from "./components/navigation/navigation.component";
import Authentication from "./routes/Authentication/Authenticaton.component";
import Home from "./routes/Home_Page/Home.component";
import Shop from "./routes/Shop Page/shop.component";
import CheckOut from "./routes/Check-Out Page/CheckOut.component";
import "./index.scss";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {
	onAuthUserStateChangedListener,
	createUserDocumentFromAuth,
} from "./utils/firebase/firebase.utils";
import setUser from "./store/user/user.action";
import { Routes, Route } from "react-router-dom";
export default function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		const unsubscribe = onAuthUserStateChangedListener(async (user) => {
			if (user) {
				await createUserDocumentFromAuth(user);
			}
			dispatch(setUser(user));
		});
		return () => unsubscribe;
	}, [dispatch]);

	return (
		<Routes>
			<Route path="/" element={<Navigation />}>
				<Route index element={<Home />} />
				<Route path="shop/*" element={<Shop />} />
				<Route path="auth" element={<Authentication />} />
				<Route path="checkout" element={<CheckOut />} />
			</Route>
		</Routes>
	);
}
