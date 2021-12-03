import React from "react";
import { Link } from "react-router-dom";
import { useCategories } from "../../utils/hooks/useCategories";

function Categories() {
  const { data: catList, isLoading: catIsLoading } = useCategories();

  return (
    <div className="categories">
      <h2>Categories</h2>
      {catIsLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="categories-grid">
          {catList.results.map((category) => (
            <div className="category" key={category.id}>
              <Link to={`/products?category=${category.id}`}>
                <img
                  className="category-image"
                  src={category.data.main_image.url}
                  alt={category.data.main_image.alt}
                />
                <h3>{category.data.name}</h3>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Categories;
