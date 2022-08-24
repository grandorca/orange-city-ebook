import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  //today is...
  const [today, setToday] = useState();

  useEffect(() => {
    let options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    let todayFormatted = new Date().toLocaleDateString("en-US", options);
    setToday(todayFormatted);
  }, []);

  return (
    <header>
      <h1 className="header-title">Orange City Commnunity E-Bookstore</h1>

      <div className="today-date">
        <span>{today}</span>
      </div>

      <Link to="/" className="nav-anchor">
        Search
      </Link>

      <Link to="/contact" className="nav-anchor">
        Contact
      </Link>
    </header>
  );
};

export default Header;
