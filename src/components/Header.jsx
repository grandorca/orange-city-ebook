import { useState, useEffect } from "react";

function Header() {
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

      <div className="today">
        <span>{today}</span>
      </div>

      <div className="menu">
        <input className="menu-checkbox" type="checkbox" />
        <div className="menu-hamburger">
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>
      </div>
    </header>
  );
}

export default Header;
