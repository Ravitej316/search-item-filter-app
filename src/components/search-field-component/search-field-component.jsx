const SearchHandle = ({ onSearchChange, placeholder, className }) => (
  <input
    className={className}
    placeholder={placeholder}
    onChange={onSearchChange}
  />
);

export default SearchHandle;
