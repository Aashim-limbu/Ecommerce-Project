import CategoryItem from "../category-item/category-item.component";
import './directory.style.scss'
export default function Directories({ categories }) {
  return (
    <div className="directories-container">
      {categories.map((category) => {
        return <CategoryItem key={category.id} category={category} />;
      })}
    </div>
  );
}
