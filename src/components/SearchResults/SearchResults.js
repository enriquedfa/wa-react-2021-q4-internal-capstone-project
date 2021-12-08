import { useSearch } from "../../utils/hooks/useSearch";
import Products from "../Products/Products.component";

function SearchResults() {
  const searchTerm = new URLSearchParams(window.location.search).get("q");

  const { data, isLoading } = useSearch(searchTerm);

  return (
    <div className="search-results">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <Products
          data={data}
          header="Search Results"
          withDescription
          itemsPerPage={20}
          categories={[]}
        />
      )}
    </div>
  );
}

export default SearchResults;
