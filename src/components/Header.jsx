import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [today, setToday] = useState();

  useEffect(() => {
    //display today's date
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
      <h1 className="header-title">
        <p>Orange City</p>
        <p>&nbsp;Bookstore</p>
      </h1>

      <div className="header-right">
        <div className="today-date">
          <span>{today}</span>
        </div>

        <nav>
          <Link to="/" className="nav-anchor">
            Search<i></i>
          </Link>

          <Link to="/contact" className="nav-anchor">
            Contact<i></i>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
