import { useState, useRef } from "react";
import Display from "../items/Display";
import { ReactComponent as Bookshelf } from "../../assets/illustrations/bookshelf.svg";
import { ReactComponent as Reading } from "../../assets/illustrations/reading.svg";

const Search = () => {
  const searchBarRef = useRef();
  const searchButtonRef = useRef();

  //search the book
  const [results, setResults] = useState([]);

  const searchBook = async () => {
    const query = searchBarRef.current.value;
    const trimedQuery = query.trim();

    if (trimedQuery !== "") {
      await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`,
        { method: "GET", headers: { "Content-Type": "application/json" } }
      )
        .then((res) => res.json())
        .then((data) => {
          setResults(data);
        });
    } else {
      setResults([]);
    }
  };

  return (
    <div className="search">
      <div className="search-section">
        <Bookshelf />

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

      <div className="display-section">
        {results.length !== 0 ? (
          <Display searchResults={results} />
        ) : (
          <Reading />
        )}
      </div>
    </div>
  );
};

export default Search;
