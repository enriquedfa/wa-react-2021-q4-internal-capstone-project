import React from "react";
import featured from "./featured-products.json"

// Returns a grid of featured products
function Featured() {
    return (
        <div className="featured">
            <h2>Featured Products</h2>
            <div className="featured-products">
                {featured.results.map(product => (
                    <div className="featured-product" key={product.id}>
                        <img className="featured-product-image" src={product.data.mainimage.url} alt={product.data.mainimage.alt} />
                        <div className="featured-product-info">
                            <h3>{product.data.name}</h3>
                            <p>${product.data.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Featured;