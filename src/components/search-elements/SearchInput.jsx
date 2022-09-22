import { SearchContextValue } from "../../contexts/SearchContext";
import { ReactComponent as SVGBookshelf } from "../../assets/illustrations/bookshelf.svg";

const SearchInput = () => {
  const {
    setSearchKey,
    searchBarRef,
    searchButtonRef,
    searchSectionRef,
    setOrderBy,
    setStartIndex,
  } = SearchContextValue();

  //Select ordering method function
  const selectOrderMethod = (e) => {
    const selectedOrder = e.target.options[e.target.selectedIndex].value;
    setOrderBy(selectedOrder);
  };

  return (
    <div className="search-section" ref={searchSectionRef}>
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
                const query = searchBarRef.current.value;
                const trimedQuery = query.trim();
                setSearchKey(trimedQuery);
                setStartIndex(0);
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
              setStartIndex(0);
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
