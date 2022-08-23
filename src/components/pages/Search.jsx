import { useState, useEffect, useRef } from "react";
import Display from "../interfaces/Display";

const Search = () => {
  const searchBarRef = useRef();
  const searchButtonRef = useRef();

  //search the book
  const [search, setSearch] = useState();
  const [result, setResult] = useState([]);

  useEffect(() => {}, [search]);

  const searchBook = async (search) => {
    // await fetch(
    //   `https://www.googleapis.com/books/v1/volumes?q=${search}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
    // )
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     setResult(data);
    //   });
    setResult(Math.random());
    console.log(search);
  };

  return (
    <div className="search-div">
      <label className="search-label">
        Search your book
        <input
          className="search-input"
          ref={searchBarRef}
          placeholder="Title, Author, ISBN, Publisher"
          onChange={(e) => {
            setSearch(searchBarRef.current.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") searchButtonRef.current.click();
          }}
        ></input>
      </label>
      <button
        ref={searchButtonRef}
        onClick={() => {
          searchBook(search);
        }}
      >
        Search
      </button>

      <Display searchResults={result} />
    </div>
  );
};

export default Search;
