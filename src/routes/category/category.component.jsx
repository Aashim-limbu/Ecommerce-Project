import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./category.styles.scss";
import selectCategoriesMap from "../../store/categories/category.selector";
import ProductCard from "../../components/Product-Cards/ProductCard.component";
import { selectCategoryIsLoading } from "../../store/categories/category.selector";
import Spinner from "../../components/loading/spinner.component";
export default function CategoryPage() {
	const categoriesMap = useSelector(selectCategoriesMap);
	const isLoading = useSelector(selectCategoryIsLoading);
	const { category } = useParams();
	const [Products, setProducts] = useState(categoriesMap[category]);
	useEffect(() => {
		setProducts(categoriesMap[category]);
	}, [categoriesMap, category]);
	return (
		<div className="category-component-container">
			<h2 className="category-title">{category}</h2>
			{isLoading ? (
				<Spinner />
			) : (
				<div className="category-container">
					{Products &&
						Products.map((product) => {
							return <ProductCard key={product.id} product={product} />;
						})}
				</div>
			)}
		</div>
	);
}
