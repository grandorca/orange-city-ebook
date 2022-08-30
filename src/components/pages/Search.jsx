import { useState, useRef } from "react";
import axios from "axios";
import { ReactComponent as SVGBookshelf } from "../../assets/illustrations/bookshelf.svg";
import { ReactComponent as SVGReading } from "../../assets/illustrations/reading.svg";
import BookCard from "../elements/BookCard";
import BookModal from "../elements/BookModal";

const Search = () => {
  const searchBarRef = useRef();
  const searchButtonRef = useRef();

  //search books & loading while searching
  const [results, setResults] = useState([]);

  const searchBook = async () => {
    const query = searchBarRef.current.value;
    const trimedQuery = query.trim();

    if (trimedQuery !== "") {
      axios
        .get(`/.netlify/functions/fetchBooks?query=${query}`)
        .then(({ data }) => {
          setResults({ data }.data.items);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setResults([]);
    }
  };

  //open book description modal
  const [selectedBook, setSelectedBook] = useState({});
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="search-page">
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
          </div>
        </div>
      </div>

      {/* display */}
      <div className="display-section">
        {results.length !== 0 ? (
          <div className="display">
            {results.map((bookObject) => {
              return (
                <BookCard
                  key={bookObject.id}
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
          </div>
        ) : (
          <SVGReading />
        )}
      </div>
    </div>
  );
};

export default Search;
