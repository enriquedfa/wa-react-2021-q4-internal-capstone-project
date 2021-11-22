import React from "react";
import Pagination from "../Pagination/Pagination.component";
// import products from "../../mocks/products.json";

function Products(params) {
  const { results } = params.data
  const categories = params.categories || []

  return (
    <div className="featured">
      <h2>{params.header}</h2>
      <div className="featured-products">
        {results
          .filter((item) => {
              if (categories.length === 0) {
                return true
              } else {
                return categories.includes(item.data.category.slug)
              }
              })
          .map((product) => (
            <div className="featured-product" key={product.id}>
              <img
                className="featured-product-image"
                src={product.data.mainimage.url}
                alt={product.data.mainimage.alt}
              />
              <div className="featured-product-info">
                <h3>{product.data.name}</h3>
                <p>${product.data.price}</p>
              </div>
            </div>
          ))}
      </div>
      <Pagination/>
    </div>
  );
}

export default Products;
