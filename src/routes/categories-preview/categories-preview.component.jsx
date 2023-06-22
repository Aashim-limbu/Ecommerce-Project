import CategoryPreview from "../../components/category-preview/category-preview.component";
import { useSelector } from "react-redux";
import selectCategoriesMap from "../../store/categories/category.selector";
import { selectCategoryIsLoading } from "../../store/categories/category.selector";
import Spinner from "../../components/loading/spinner.component";
export default function CategoriesPreview() {
	const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoryIsLoading)
	return (
		<>
			{isLoading ? (
				<Spinner />
			) : (
				Object.keys(categoriesMap).map((title) => {
					const products = categoriesMap[title];
					return (
						<CategoryPreview key={title} products={products} title={title} />
					);
				})
			)}
		</>
	);
}
