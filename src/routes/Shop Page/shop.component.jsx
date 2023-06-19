import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import "./shop.style.scss";
import { useDispatch } from "react-redux";
import CategoryPage from "../category/category.component";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import { fetchCategoryAsync } from "../../store/categories/category.action";
export default function Shop() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchCategoryAsync());
	}, [dispatch]);
	return (
		<Routes>
			<Route index element={<CategoriesPreview />} />
			<Route path=":category" element={<CategoryPage />} />
		</Routes>
	);
}
