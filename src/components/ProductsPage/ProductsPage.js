import { React, useState, useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar.component";
import Products from "../Products/Products.component";
import { useCategories } from "../../utils/hooks/useCategories";
import { useProducts } from "../../utils/hooks/useProducts";

function ProductsPage() {
  const [categories, setCategories] = useState([]);
  const { data: catList, isLoading: catIsLoading } = useCategories();
  const { data: products, isLoading: productsIsLoading } = useProducts();

  const urlCategory = new URLSearchParams(window.location.search).get(
    "category"
  );

  useEffect(() => {
    if (!catIsLoading) {
      if (catList.results.find((category) => category.id === urlCategory)) {
        setCategories([...categories, urlCategory]);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [catIsLoading]);

  return (
    <div className="products">
      {!catIsLoading ? (
        <Sidebar
          data={catList}
          categories={categories}
          setCategories={setCategories}
        />
      ) : null}
      {!productsIsLoading ? (
        <>
          <Products
            header="Products"
            data={products}
            categories={categories}
            itemsPerPage={12}
          />
        </>
      ) : null}
    </div>
  );
}

export default ProductsPage;
