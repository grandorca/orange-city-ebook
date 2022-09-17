import { useState, useRef, useEffect } from "react";
import { ReactComponent as SVGBookshelf } from "../../assets/illustrations/bookshelf.svg";
import { ReactComponent as SVGReading } from "../../assets/illustrations/reading.svg";
import BookCard from "../elements/BookCard";
import BookModal from "../elements/BookModal";
import axios from "axios";

const Search = () => {
  //variables
  // for detaching search/order
  // const [searchQuery, setSearchQuery] = useState();
  // const [startIndex, setStartIndex] = useState(0);

  const [orderBy, setOrderBy] = useState("relevance");
  const [results, setResults] = useState(false);

  const [selectedBook, setSelectedBook] = useState({});
  const [modalOpen, setModalOpen] = useState(false);

  const searchPageRef = useRef();
  const searchBarRef = useRef();
  const searchButtonRef = useRef();

  //search books function
  const loading = () => {
    setResults([]);
  };

  const searchBook = async () => {
    loading();

    const query = searchBarRef.current.value;
    const trimedQuery = query.trim();

    if (trimedQuery !== "") {
      axios
        .get(
          `/.netlify/functions/fetchBooks?query=${query}&orderBy=${orderBy}&startIndex=0`
        )
        .then(({ data }) => {
          setResults({ data }.data.items);
          // console.log({ data }.data.totalItems);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setResults(false);
    }
  };

  //change order mehtod to sort the result
  const selectOrderMethod = (e) => {
    const selectedOrder = e.target.options[e.target.selectedIndex].value;
    setOrderBy(selectedOrder);
  };

  useEffect(() => {
    searchBook();
    // eslint-disable-next-line
  }, [orderBy]);

  //open book description modal

  return (
    <div className="search-page" ref={searchPageRef}>
      {/* search */}
      <div className="search-section">
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

      {/* display */}
      <div className="display-section">
        {results ? (
          results.length !== 0 ? (
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

              {/* <div className="display-page">
              <div className="display-page-button-container">
                <button className="display-page-button" id="pre">
                  Previous
                </button>
              </div>

              <div className="display-page-button-container">
                <button className="display-page-button" id="next">
                  Next
                </button>
              </div>
            </div> */}

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
            <div className="display-loading">
              <svg className="loading-animation" width="100" height="100">
                <circle cx="50" cy="50" r="40" />
              </svg>

              <p className="loading-text">Searching...</p>
            </div>
          )
        ) : (
          <SVGReading />
        )}
      </div>
    </div>
  );
};

export default Search;
