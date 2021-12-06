import { MdSearch } from "react-icons/md";

function Search({ route }) {
  return (
    <div className="header__search">
      <form action={route} method="GET">
        <input
          name="q"
          id="searchTerm"
          type="text"
          placeholder="Search for products"
        />
        <button type="submit">
          <MdSearch />
        </button>
      </form>
    </div>
  );
}

export default Search;
