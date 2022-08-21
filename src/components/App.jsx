import Nav from "./interfaces/Nav";
import Search from "./interfaces/Search";
import Header from "./Header";
import Contact from "./Contact";
import Book from "./Book";
import Footer from "./Footer";
import { useEffect } from "react";

function App() {
  const fetchData = async () => {
    await fetch("/.netlify/functions/fetchBoos")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

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
