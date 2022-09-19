import { useState, createContext, useRef, useEffect } from "react";
import axios from "axios";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  //variables
  const [orderBy, setOrderBy] = useState("relevance");
  const [results, setResults] = useState(false);

  const [selectedBook, setSelectedBook] = useState({});
  const [modalOpen, setModalOpen] = useState(false);

  const searchBarRef = useRef("");
  const searchButtonRef = useRef();

  const loading = () => {
    setResults([]);
  };

  //search books function
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
          // number of search results
          // console.log({ data }.data.totalItems);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setResults(false);
    }
  };

  //change ordering method to sort the result
  const selectOrderMethod = (e) => {
    const selectedOrder = e.target.options[e.target.selectedIndex].value;
    setOrderBy(selectedOrder);
  };

  useEffect(() => {
    searchBook();
    //eslint-disable-next-line
  }, [orderBy]);

  return (
    <SearchContext.Provider
      value={
        (searchButtonRef,
        searchBarRef,
        orderBy,
        results,
        selectedBook,
        modalOpen,
        setOrderBy,
        setSelectedBook,
        selectOrderMethod,
        searchBook,
        setModalOpen)
      }
    >
      {children}
    </SearchContext.Provider>
  );
};
