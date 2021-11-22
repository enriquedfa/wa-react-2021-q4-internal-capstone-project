import { React } from "react";

export default function Sidebar(params) {
  const { results } = params.data;

  function eventHandler(e) {
    e.preventDefault();
    const targetCategories = e.target.attributes.slug.value.split("_");
    
    if (e.target.classList.contains("selected")) {
      const newCategories = params.categories.filter((category) => {
        return !targetCategories.includes(category);
      });
      params.setCategories(newCategories);
    } else {
      params.setCategories([...params.categories, ...targetCategories]);
    }
  }

  // Checks if two arrays have a common element
  function hasCommonElement(arr1, arr2) {
    return arr1.some((element) => arr2.includes(element));
  }

  return (
    <div className="sidebar">
      <div className="sidebar__categories">
        <h3 className="sidebar__title">Categories</h3>
        <ul className="sidebar__list">
          {results.map((item) => {
            const isSelected = hasCommonElement(params.categories, item.slugs);
            const className = isSelected ? "selected" : "";
            return (
              <li
                onClick={eventHandler}
                className={`sidebar__item ${className}`}
                key={item.id}
                slug={item.slugs.join("_")}
              >
                {item.data.name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
