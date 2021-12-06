import { React, useState, useEffect } from "react";
import Product from "../Product/Product.component";
import ReactPaginate from "react-paginate";

function Products({
  header,
  data,
  categories = [],
  withDescription,
  itemsPerPage = 20,
}) {
  const { results: products } = data;
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const aux = products.filter((item) => {
      return (
        categories.length === 0 || categories.includes(item.data.category.id)
      );
    });
    setPageCount(Math.ceil(aux.length / itemsPerPage));
    setFilteredProducts(aux);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories]);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(filteredProducts.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(filteredProducts.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, filteredProducts]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="products-container">
      {currentItems && (
        <>
          {currentItems.length > 0 ? (
            <h2>{header}</h2>
          ) : (
            <h2>No products found</h2>
          )}
          <div className="products">
            {currentItems.map((product) => (
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
        </>
      )}
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
