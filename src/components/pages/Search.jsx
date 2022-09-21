import { SearchProvider } from "../../contexts/SearchContext";
import SearchInput from "../search-elements/SearchInput";
import SearchResult from "../search-elements/SearchResult";

const Search = () => {
  return (
    <div className="search-page">
      <SearchProvider>
        <SearchInput />
        <SearchResult />
      </SearchProvider>
    </div>
  );
};

export default Search;
