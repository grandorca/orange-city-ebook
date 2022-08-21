// import { useState } from "react";

function Search() {
  return (
    <div className="search-div">
      <label className="search-label">
        Search
        <input
          className="search-input"
          onChange={() => {
            console.log("change");
          }}
        ></input>
      </label>
    </div>
  );
}

export default Search;
