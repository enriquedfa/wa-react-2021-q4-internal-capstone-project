import React from "react";
import Pagination from "../Pagination/Pagination.component";

const Product = ({ id, url, alt, name, price }) => {
  return (
    <div className="featured-product" key={id}>
      <img className="featured-product-image" src={url} alt={alt} />
      <div className="featured-product-info">
        <h3>{name}</h3>
        <p>${price}</p>
      </div>
    </div>
  );
};

function Products({ header, data, categories }) {
  const { results } = data;
  const prodCategories = categories || [];

  return (
    <div className="featured">
      <h2>{header}</h2>
      <div className="featured-products">
        {results
          .filter((item) => {
            return (
              prodCategories.length === 0 ||
              prodCategories.includes(item.data.category.slug)
            );
          })
          .map((product) => (
            <Product
              key={product.id}
              {...product.data.mainimage}
              {...product.data}
            />
          ))}
      </div>
      <Pagination />
    </div>
  );
}

export default Products;
