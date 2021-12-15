import { useNavigate } from "react-router";

function Search({ route }) {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const search = e.target.search.value;
    navigate(`${route}?q=${search}`, { replace: true });
  }

  return (
    <div className="header__search">
      <form onSubmit={handleSubmit}>
        <input
          name="search"
          id="search"
          type="text"
          placeholder="Search for products"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default Search;
