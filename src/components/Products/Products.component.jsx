import { React, useState, useEffect } from "react";
import Product from "../Product/Product.component";
import ReactPaginate from "react-paginate";

function Products({ header, data, categories, withDescription, itemsPerPage }) {
  const { results: products } = data;
  const prodCategories = categories || [];
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(products.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(products.length / itemsPerPage));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemOffset, itemsPerPage]);

  if (products === undefined || currentItems === null) {
    return <h2>No products found</h2>;
  }

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="products-container">
      <h2>{header}</h2>
      <div className="products">
        {currentItems
          .filter((item) => {
            return (
              prodCategories.length === 0 ||
              prodCategories.includes(item.data.category.id)
            );
          })
          .map((product) => (
            <Product
              withDescription={withDescription}
              shortDescription={product.data.short_description}
              key={product.id}
              productId={product.id}
              {...product.data.mainimage}
              {...product.data}
            />
          ))}
      </div>
      {products.length > itemsPerPage && (
        <div className="products-pagination">
        <ReactPaginate
          pageCount={pageCount}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          previousLabel="<"
          nextLabel=">"
          containerClassName="pagination"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          activeClassName="page-active"
        />
      </div>
      )}
    </div>
  );
}

export default Products;
