import ProductCard from "../Product-Cards/ProductCard.component";
import "./category-preview.style.scss";
export default function CategoryPreview({ title, products }) {
  return (
    <div className="category-preview-container">
      <h2>
        <span className="title">{title.toUpperCase()}</span>
      </h2>
      <div className="preview">
        {products
          .filter((_, indx) => indx < 4)
          .map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </div>
    </div>
  );
}
