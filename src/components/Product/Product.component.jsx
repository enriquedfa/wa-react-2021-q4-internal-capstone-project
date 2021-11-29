import { Link } from "react-router-dom";

function Product({
  withDescription,
  shortDescription,
  productId,
  url,
  alt,
  name,
  price,
  category,
}) {
  return (
    <div className="product" key={productId}>
      <img className="product-image" src={url} alt={alt} />
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-category">{category.slug}</p>
        {withDescription && (
          <p className="product-description">
            {shortDescription || "No description available"}
          </p>
        )}
        <p className="product-price">${price}</p>
        <div className="product-buttons">
          <button>Add to Cart</button>
          <Link to={`/product/${productId}`}>
            <button>View</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Product;
