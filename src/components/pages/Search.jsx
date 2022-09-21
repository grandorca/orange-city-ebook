import SearchResult from "../search-elements/SearchResult";
import SearchInput from "../search-elements/SearchInput";
import { SearchProvider } from "../../contexts/SearchContext";

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
