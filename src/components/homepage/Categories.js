import React from "react";
import categories  from "./product-categories.json"

function Categories() {
    return (
        <div className="categories">
            {categories.results.map((category, index) => {
                return (
                    <div className="category" key={index}>
                        <img src={category.image} alt={category.name}/>
                        <p>{category.name}</p>
                    </div>
                )
            }, this)}
        </div>
    )
}

export default Categories;