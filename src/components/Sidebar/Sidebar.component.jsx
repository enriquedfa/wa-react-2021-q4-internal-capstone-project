import { React } from "react";
import { useNavigate } from "react-router-dom";

export default function Sidebar({ data, categories, setCategories }) {
  const { results: availableCategories } = data;
  const navigate = useNavigate();

  function eventHandler(e) {
    e.preventDefault();
    const targetCategory = e.target.attributes.id.value;

    if (e.target.classList.contains("selected")) {
      const newCategories = categories.filter((category) => {
        return category !== targetCategory;
      });
      setCategories(newCategories);
    } else {
      setCategories([...categories, targetCategory]);
    }
  }

  function clearAll() {
    navigate("/Products");
    setCategories([]);
  }

  return (
    <div className="sidebar">
      <div className="sidebar__categories">
        <h3 className="sidebar__title">Categories</h3>
        <ul className="sidebar__list">
          {availableCategories.map((item) => {
            const className = categories.includes(item.id) ? "selected" : "";
            return (
              <li
                onClick={eventHandler}
                className={`sidebar__item ${className}`}
                key={item.id}
                id={item.id}
              >
                {item.data.name}
              </li>
            );
          })}
          {categories.length > 0 && (
            <li className="sidebar__item" onClick={clearAll}>
              Clear All
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
