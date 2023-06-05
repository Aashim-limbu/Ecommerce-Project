import { Routes, Route } from "react-router-dom";
import "./shop.style.scss";
import CategoryPage from "../category/category.component";
import CategoriesPreview from "../categories-preview/categories-preview.component";
export default function Shop() {
	return (
		<Routes>
			<Route index element={<CategoriesPreview />} />
			<Route path=":category" element={<CategoryPage />} />
		</Routes>
	);
}
