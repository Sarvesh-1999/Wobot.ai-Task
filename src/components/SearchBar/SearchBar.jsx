import styles from "./Searchbar.module.css";

const SearchBar = ({ value, onChange }) => {
  return (
    <div className={styles.search_container}>
      <input
        type="search"
        placeholder="Search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <span>🔍</span>
    </div>
  );
};

export default SearchBar;
