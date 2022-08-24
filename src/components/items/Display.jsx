import { useEffect } from "react";

const Display = (props) => {
  // const results = props.searchResults;

  const results = [{ id: 11, title: "title" }];

  useEffect(() => {
    console.log(props.searchResults);
  }, [props.searchResults]);

  return (
    <div className="display">
      {results.map((book) => {
        return (
          <div className="display-card" key={book.id}>
            {book.title}
          </div>
        );
      })}
    </div>
  );
};

export default Display;
