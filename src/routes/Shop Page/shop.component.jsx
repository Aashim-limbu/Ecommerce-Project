import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { setCategoriesMap } from "../../store/categories/category.action";
import "./shop.style.scss";
import { useDispatch } from "react-redux";
import CategoryPage from "../category/category.component";
import CategoriesPreview from "../categories-preview/categories-preview.component";
export default function Shop() {
    const dispatch = useDispatch()
    useEffect(() => {
			const getCategoriesMap = async () => {
				const categoryMap = await getCategoriesAndDocuments();
				dispatch(setCategoriesMap(categoryMap));
			};
			getCategoriesMap();
		}, [dispatch]);
	return (
		<Routes>
			<Route index element={<CategoriesPreview />} />
			<Route path=":category" element={<CategoryPage />} />
		</Routes>
	);
}
