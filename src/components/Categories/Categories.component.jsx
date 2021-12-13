import React from "react";
import { useCategories } from "../../utils/hooks/useCategories";
import Card from "../Card/Card.component";

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
            <Card key={category.id} {...category} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Categories;
