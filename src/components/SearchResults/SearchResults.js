import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useAxiosSearch } from "../../utils/hooks/useAxiosSearch";
import Products from "../Products/Products.component";

function SearchResults() {
  const searchTerm = new URLSearchParams(useLocation().search).get("q");
  const [search, setSearch] = useState(searchTerm);
  const [page, setPage] = useState(1);
  const { searchResults, loading } = useAxiosSearch(search, page);

  console.log(searchTerm);

  useEffect(() => {
    setPage(1);
    setSearch(searchTerm);
  }, [searchTerm]);

  function handlePageChange(newPage) {
    setPage(newPage + 1);
  }

  return (
    <div className="search-results">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Products
          data={searchResults}
          header="Search Results"
          withDescription
          itemsPerPage={20}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
}

export default SearchResults;
