import { useContext } from "react";
import { SearchContext } from "../../contexts/SearchContext";
import { ReactComponent as SVGReading } from "../../assets/illustrations/reading.svg";

import BookCard from "./BookCard";
import BookModal from "./BookModal";
import Pagination from "./Pagination";

const SearchResult = () => {
  const {
    // orderBy,
    results,
    setModalOpen,
    setSelectedBook,
    selectedBook,
    modalOpen,
  } = useContext(SearchContext);

  const searchPageRef = useContext(SearchContext);

  return (
    <div className="display-section">
      {results ? (
        results.length !== 0 ? (
          //Display-Page
          <div className="display-card-container">
            {results.map((bookObject, id) => {
              return (
                <BookCard
                  key={id}
                  bookObject={bookObject}
                  setModalOpen={setModalOpen}
                  setSelectedBook={setSelectedBook}
                />
              );
            })}
            <BookModal
              selectedBook={selectedBook}
              modalOpen={modalOpen}
              setModalOpen={setModalOpen}
            />

            <Pagination />

            <button
              className="back-to-search-button"
              onClick={() => {
                searchPageRef.current.scrollIntoView({ behavior: "smooth" });
              }}
            >
              back to search
            </button>
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
