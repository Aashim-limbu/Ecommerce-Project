import { Routes, Route } from "react-router-dom";
import { useEffect} from "react";
import "./shop.style.scss";
import { useDispatch } from "react-redux";
import CategoryPage from "../category/category.component";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { setCategories } from "../../store/categories/category.reducer";
export default function Shop() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments('categories');
      dispatch(setCategories(categoriesArray));
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
