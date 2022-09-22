import { useState, useEffect, useRef, useContext, createContext } from "react";
import axios from "axios";

export const SearchContext = createContext();

export const SearchContextValue = () => {
  return useContext(SearchContext);
};

export const SearchProvider = ({ children }) => {
  //variables
  const [searchKey, setSearchKey] = useState("");
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

    if (searchKey !== "") {
      axios
        .get(
          `/.netlify/functions/fetchBooks?query=${searchKey}&orderBy=${orderBy}&startIndex=0`
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

  const changePage = async () => {
    loading();

    const query = searchBarRef.current.value;
    const trimedQuery = query.trim();

    if (trimedQuery !== "") {
      axios
        .get(
          `/.netlify/functions/fetchBooks?query=${searchKey}&orderBy=${orderBy}&startIndex=${startIndex}`
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

  //Search book on input change
  useEffect(() => {
    searchBook();
    //eslint-disable-next-line
  }, [searchKey, orderBy]);

  useEffect(() => {
    changePage();
    // eslint-disable-next-line
  }, [startIndex]);

  return (
    <SearchContext.Provider
      value={{
        searchKey,
        setSearchKey,
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
        changePage,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
