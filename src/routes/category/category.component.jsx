import { useParams } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import "./category.styles.scss";
import ProductCard from "../../components/Product-Cards/ProductCard.component";
import CategoriesContext from "../../context/Categories-context";
export default function CategoryPage() {
	const { categoriesMap } = useContext(CategoriesContext);
	const { category } = useParams();
	const [Products, setProducts] = useState(categoriesMap[category]);
	useEffect(() => {
		setProducts(categoriesMap[category]);
	}, [categoriesMap, category]);
	return (
		<>
			<h2 className="category-title">{category}</h2>
			<div className="category-container">
				{Products &&
					Products.map((product) => {
						return <ProductCard key={product.id} product={product} />;
					})}
			</div>
		</>
	);
}
