import { useEffect } from "react";
import { SearchContextValue } from "../../contexts/SearchContext";
import { ReactComponent as SVGReading } from "../../assets/illustrations/reading.svg";

import BookCard from "./BookCard";
import BookModal from "./BookModal";
import Pagination from "./Pagination";

const SearchResult = () => {
  const { results, orderBy, searchPageRef, searchBook } = SearchContextValue();

  useEffect(() => {
    searchBook();
    // eslint-disable-next-line
  }, [orderBy]);

  return (
    <div className="display-section">
      {results ? (
        results.length !== 0 ? (
          //Display-Page
          <div className="display-card-container">
            {results.map((bookObject, id) => {
              return <BookCard key={id} bookObject={bookObject} />;
            })}

            <BookModal />

            <Pagination />

            <button
              className="back-to-search-button"
              onClick={() => {
                searchPageRef.current.scrollIntoView({ behavior: "smooth" });
              }}
            ></button>
          </div>
        ) : (
          //Landing-Page
          <div className="display-loading">
            <svg className="loading-animation" width="100" height="100">
              <circle cx="50" cy="50" r="40" />
            </svg>

            <p className="loading-text">Searching...</p>
          </div>
        )
      ) : (
        // Default-Page
        <SVGReading />
      )}
    </div>
  );
};

export default SearchResult;
