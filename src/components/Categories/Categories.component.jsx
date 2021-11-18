import React from "react";
import categories  from "../../mocks/product-categories.json"

function Categories() {
    const { results } = categories
    return (
        <div className="categories">
            <h2>Categories</h2>
            <div className="categories-grid">
                {results.map(category => (
                    <div className="category" key={category.id}>
                        <img className="category-image" src={category.data.main_image.url} alt={category.data.main_image.alt} />
                        <h3>{category.data.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

//             {categories.results.map((category, index) => {
//                 return (
//                     <div className="category" key={index}>
//                         <img src={category.data.main_image.url} alt={category.data.main_image.alt}/>
//                         <p>{category.data.name}</p>
//                     </div>
//                 )
//             })}
//         </div>
//     )
// }

export default Categories;