import { useState, useRef, useContext, createContext } from "react";
import axios from "axios";

export const SearchContext = createContext();

export const SearchContextValue = () => {
  return useContext(SearchContext);
};

export const SearchProvider = ({ children }) => {
  //variables
  const [orderBy, setOrderBy] = useState("relevance");
  const [results, setResults] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [totalNumber, setTotalNumber] = useState();

  const [selectedBook, setSelectedBook] = useState({});
  const [modalOpen, setModalOpen] = useState(false);

  const searchSectionRef = useRef();
  const displaySectionRef = useRef();
  const searchBarRef = useRef();
  const searchButtonRef = useRef();

  //Fetch book data function
  const searchBook = async () => {
    loading();

    const query = searchBarRef.current.value;
    const trimedQuery = query.trim();

    if (trimedQuery !== "") {
      axios
        .get(
          `/.netlify/functions/fetchBooks?query=${query}&orderBy=${orderBy}&startIndex=${startIndex}`
        )
        .then(({ data }) => {
          setResults({ data }.data.items);
          setTotalNumber({ data }.data.totalItems);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setResults(false);
    }
  };

  //Show loading animation
  const loading = () => {
    setResults([]);
  };

  return (
    <SearchContext.Provider
      value={{
        orderBy,
        setOrderBy,
        startIndex,
        setStartIndex,
        selectedBook,
        setSelectedBook,
        modalOpen,
        setModalOpen,

        results,
        totalNumber,
        searchSectionRef,
        displaySectionRef,
        searchBarRef,
        searchButtonRef,
        searchBook,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
