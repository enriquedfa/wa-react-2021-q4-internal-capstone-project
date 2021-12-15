import React from "react";
import { useAxiosCategories } from "../../utils/hooks/useAxiosCategories";
import Card from "../Card/Card.component";

function Categories() {
  const { categories, loading: categoriesIsLoading } = useAxiosCategories();

  return (
    <div className="categories">
      <h2>Categories</h2>
      {categoriesIsLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="categories-grid">
          {categories.results.map((category) => (
            <Card key={category.id} {...category} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Categories;
