import { React, useState, useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar.component";
import Products from "../Products/Products.component";
import { useAxiosCategories } from "../../utils/hooks/useAxiosCategories";
import { useAxiosProducts } from "../../utils/hooks/useAxiosProducts";

function ProductsPage() {
  const [categoriesFilter, setCategoriesFilters] = useState([]);
  const [page, setPage] = useState(1);
  const { categories, loading: categoriesIsLoading } = useAxiosCategories();
  const { products, loading: productsIsLoading } = useAxiosProducts(
    categoriesFilter,
    12,
    page
  );

  function handlePageChange(newPage) {
    setPage(newPage + 1);
  }

  console.log("categories", categories);
  console.log("products", products);

  const urlCategory = new URLSearchParams(window.location.search).get(
    "category"
  );

  useEffect(() => {
    if (!categoriesIsLoading) {
      if (categories.results.find((category) => category.id === urlCategory)) {
        setCategoriesFilters([...categoriesFilter, urlCategory]);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoriesIsLoading]);

  return (
    <div className="products">
      {!categoriesIsLoading ? (
        <Sidebar
          data={categories}
          categories={categoriesFilter}
          setCategories={setCategoriesFilters}
        />
      ) : null}
      {!productsIsLoading ? (
        <>
          <Products
            header="Products"
            data={products}
            categories={categoriesFilter}
            itemsPerPage={12}
            onPageChange={handlePageChange}
          />
        </>
      ) : null}
    </div>
  );
}

export default ProductsPage;
