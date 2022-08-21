import Nav from "./interfaces/Nav";
import Search from "./interfaces/Search";
import Header from "./Header";
import Contact from "./Contact";
import Book from "./Book";
import Footer from "./Footer";

function App() {
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
