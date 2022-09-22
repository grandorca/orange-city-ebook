import { useState, useEffect } from "react";
import { SearchContextValue } from "../../contexts/SearchContext";

const Pagination = () => {
  const { startIndex, setStartIndex, totalNumber, displaySectionRef } =
    SearchContextValue();

  const [isPrevious, setIsPrevious] = useState(true);
  const [isNext, setIsNext] = useState(true);

  useEffect(() => {
    if (startIndex === 0) {
      setIsPrevious(false);
    } else {
      setIsPrevious(true);
    }

    if (startIndex + 10 >= totalNumber) {
      setIsNext(false);
    } else {
      setIsNext(true);
    }

    displaySectionRef.current.scrollIntoView();
  }, [isPrevious, isNext, startIndex, totalNumber, displaySectionRef]);

  const changePage = (command) => {
    switch (command) {
      case "next":
        setStartIndex((prevState) => prevState + 10);
        break;
      case "previous":
        setStartIndex((prevState) => prevState - 10);
        break;
      default:
        break;
    }
  };

  return (
    <div className="display-pagination">
      <button
        className={`display-pagination-button ${isPrevious ? "" : "disabled"}`}
        onClick={() => {
          changePage("previous");
        }}
      >
        Previous
      </button>

      <button
        className={`display-pagination-button ${isNext ? "" : "disabled"}`}
        onClick={() => {
          changePage("next");
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
