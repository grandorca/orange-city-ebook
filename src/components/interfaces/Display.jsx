import { useEffect } from "react";

const Display = (props) => {
  // const results = props.searchResults;

  const results = [{ id: 11, title: "title" }];
  useEffect(() => {
    console.log("data recieved");
  }, [props.searchResults]);
  return (
    <div className="book-display">
      {results.map((book) => {
        return (
          <div className="book-card" key={book.id}>
            {book.title}
          </div>
        );
      })}
    </div>
  );
};

export default Display;
