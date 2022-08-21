// import { useEffect } from "react";

import Nav from "./interfaces/Nav";
import Search from "./interfaces/Search";
import Header from "./Header";
import Contact from "./Contact";
import Book from "./Book";
import Footer from "./Footer";

function App() {
  // const fetchData = async () => {
  //   await fetch("/.netlify/functions/fetchBooks")
  //     .then((res) => console.log(res))
  //     .then((data) => {
  //       // console.log(data);
  //     });
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <div className="app">
      <Nav />

      <Header />
      <Search />
      <Book />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
