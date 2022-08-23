// import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div className="nav-menu"></div>

      <ul className="nav-list">
        <li className="nav-item" id="home">
          <Link to="/">Home</Link>
        </li>

        <li className="nav-item" id="contact">
          <Link to="/">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
