import { useState, useRef, useContext, createContext } from "react";
import axios from "axios";

export const SearchContext = createContext();

export function SearchContextReturn() {
  return useContext(SearchContext);
}

export function SearchProvider({ children }) {
  const [orderBy, setOrderBy] = useState("relevance");
  const [results, setResults] = useState(false);

  const [selectedBook, setSelectedBook] = useState({});
  const [modalOpen, setModalOpen] = useState(false);

  const searchPageRef = useRef();
  const searchBarRef = useRef();
  const searchButtonRef = useRef();

  const loading = () => {
    setResults([]);
  };

  //Fetch book data function
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

  //Change ordering of book
  const selectOrderMethod = (e) => {
    const selectedOrder = e.target.options[e.target.selectedIndex].value;
    setOrderBy(selectedOrder);
  };

  return (
    <SearchContext.Provider
      value={{
        orderBy,
        setOrderBy,
        selectedBook,
        setSelectedBook,
        modalOpen,
        setModalOpen,

        results,
        searchPageRef,
        searchBarRef,
        searchButtonRef,
        selectOrderMethod,
        searchBook,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
