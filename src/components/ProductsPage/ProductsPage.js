import { React, useState } from "react";
import Sidebar from "../Sidebar/Sidebar.component";
import Products from "../Products/Products.component";
import products from "../../mocks/products.json";
import CatList from "../../mocks/product-categories.json";

function ProductsPage() {
  const [categories, setCategories] = useState([]);

  return (
    <div className="products">
      <Sidebar
        data={CatList}
        categories={categories}
        setCategories={setCategories}
      />
      <Products header="Products" data={products} categories={categories} />
    </div>
  );
}

export default ProductsPage;
