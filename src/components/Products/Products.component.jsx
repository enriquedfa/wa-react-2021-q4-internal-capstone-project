import { React } from "react";
import Product from "../Product/Product.component";
import ReactPaginate from "react-paginate";

function Products({
  header,
  data,
  withDescription,
  itemsPerPage = 20,
  onPageChange,
}) {
  const { results: products } = data;

  return (
    <div className="products-container">
      {products && (
        <>
          {products.length > 0 ? <h2>{header}</h2> : <h2>No products found</h2>}
          <div className="products">
            {products.map((product) => (
              <Product
                withDescription={withDescription}
                shortDescription={product.data.short_description}
                key={product.id}
                product={product}
              />
            ))}
          </div>
        </>
      )}
      {data.total_pages > 1 && (
        <div className="products-pagination">
          <ReactPaginate
            forcePage={data.page - 1}
            pageCount={data.total_pages}
            itemsPerPage={itemsPerPage}
            onPageChange={(event) => onPageChange(event.selected)}
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
