import Rating from "./Rating";
function Product({ productValue }) {
  if (productValue) {
    return (
      <tr>
        <td>{productValue.id}</td>
        <td>{productValue.title}</td>
        <td>{productValue.price}</td>
        <td>{productValue.description.slice(0, 150) + "..."}</td>
        <td>{productValue.category}</td>
        <td>
          <img src={productValue.image} width={"80px"} />
        </td>

        <Rating
          rate={productValue.rating.rate}
          count={productValue.rating.count}
          pro={productValue.rating}
        />
      </tr>
    );
  }
}

export default Product;
