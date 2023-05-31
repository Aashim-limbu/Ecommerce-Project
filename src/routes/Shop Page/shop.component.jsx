import ProductContext from "../../context/shop-item-context";
import { useContext } from "react";
import ProductCard from "../../components/Product-Cards/ProductCard.component";
import './shop.style.scss'
export default function Shop() {
  const { Items } = useContext(ProductContext);
  const listItem = Items.map((data) => {
    return (
        <ProductCard key={data.id} product={data} />
    );
  });
  return <div className="products-container">{listItem}</div>;
}
