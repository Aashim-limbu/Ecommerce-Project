import {useContext} from "react";
import CategoriesContext from "../../context/Categories-context";
import CategoryPreview from "../../components/category-preview/category-preview.component";
export default function CategoriesPreview() {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <>
    {Object.keys(categoriesMap).map((title) => {
      const products = categoriesMap[title]
      return <CategoryPreview key={title} products={products} title={title} />
      })}
    </>
  );
}
