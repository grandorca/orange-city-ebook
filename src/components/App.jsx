import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Header";
import Search from "./pages/Search";
import Contact from "./pages/Contact";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Header />

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
