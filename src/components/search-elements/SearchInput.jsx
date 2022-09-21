import { useContext } from "react";
import { SearchContext } from "../../contexts/SearchContext";
import { ReactComponent as SVGBookshelf } from "../../assets/illustrations/bookshelf.svg";

const SearchInput = () => {
  const {
    searchBarRef,
    searchButtonRef,
    searchPageRef,
    selectOrderMethod,
    searchBook,
  } = useContext(SearchContext);

  return (
    <div className="search-section" ref={searchPageRef}>
      <SVGBookshelf />

      <div className="search-form">
        <div className="search-form-center">
          <label className="search-label">Find Your Book</label>

          <div className="search-input-duo">
            <input
              className="search-input"
              ref={searchBarRef}
              placeholder="Title, Author, Publisher, ISBN"
              onKeyDown={(e) => {
                if (e.key === "Enter") searchButtonRef.current.click();
              }}
            ></input>
            <button
              className="search-button"
              ref={searchButtonRef}
              onClick={() => {
                searchBook();
              }}
            >
              Search
            </button>
          </div>

          <select
            className="search-select"
            name="orderBy"
            defaultValue="relevance"
            onChange={(e) => {
              selectOrderMethod(e);
            }}
          >
            <option className="search-option" value="relevance">
              relevant books
            </option>
            <option className="search-option" value="newest">
              newest books
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
