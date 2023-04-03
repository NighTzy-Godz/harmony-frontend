import "../../assets/css/search_bar.css";

const SearchBar = ({ search, onSearchChange }) => {
  return (
    <div className="search_bar">
      <label htmlFor="search">Search Here</label>
      <input
        type="text"
        value={search}
        placeholder="Search for a Doctor."
        onChange={onSearchChange}
      />
    </div>
  );
};

export default SearchBar;
