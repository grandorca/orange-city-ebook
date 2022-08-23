import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Header";
import Search from "./pages/Search";
import Contact from "./pages/Contact";
import Footer from "./Footer";

const App = () => {
  /*netlify fucntion test */
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
      <Header />

      <Router>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
};

export default App;
