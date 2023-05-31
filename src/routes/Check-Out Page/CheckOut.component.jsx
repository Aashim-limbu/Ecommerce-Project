import CartContext from "../../context/cart-item-context";
import "./CheckOut.style.scss";
import { useContext } from "react";
export default function CheckOut() {
  const { Collection, setCollection, addItemToCart, removeItemFromCart } =
    useContext(CartContext);
  function handleClick(product) {
    setCollection(Collection.filter((item) => item.id !== product.id));
  }
  const tableHeaders = [
    { name: "Product" },
    { name: "Description" },
    { name: "Quality" },
    { name: "Price" },
    { name: "Remove" },
  ];
  const headerList = tableHeaders.map(({ name }) => {
    return <th key={name}>{name}</th>;
  });
  const bodyList = Collection.map((product) => {
    const { id, imageUrl, name, quantity, price } = product;
    return (
      <tr key={id}>
        <td>
          <img src={imageUrl} alt={`${name}`} />
        </td>
        <td>{name}</td>
        <td>
          <span
            onClick={() => {
              addItemToCart(product);
            }}
          >
            UP{" "}
          </span>
          {quantity}
          <span
            onClick={() => {
              removeItemFromCart(product);
            }}
          >
            {" "}
            Down
          </span>
        </td>
        <td>{price}</td>
        <td>
          <span
            onClick={() => {
              handleClick(product);
            }}
          >
            X
          </span>
        </td>
      </tr>
    );
  });
  return (
    <div className="table-container">
    <table>
      <thead>
        <tr>{headerList}</tr>
      </thead>
      <tbody>{bodyList}</tbody>
      <tfoot>
        <tr>
          <td>Total cost</td>
        </tr>
      </tfoot>
    </table>
    </div>
  );
}
