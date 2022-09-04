import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [today, setToday] = useState();
  const navbar = useRef([]);

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

    //navbar item hover effect
    navbar.current.forEach((theRef) => {
      theRef.addEventListener("mouseenter", (e) => {
        e.target.classList.toggle("hover-effect");
      });
      theRef.addEventListener("mouseleave", (e) => {
        e.target.classList.toggle("hover-effect");
      });
    });
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
          <Link
            to="/"
            className="nav-anchor"
            ref={(thisRef) => {
              navbar.current[0] = thisRef;
            }}
          >
            Search<i></i>
          </Link>

          <Link
            to="/contact"
            className="nav-anchor"
            ref={(thisRef) => {
              navbar.current[1] = thisRef;
            }}
          >
            Contact<i></i>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
