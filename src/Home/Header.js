import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <nav className="header">
      <div className="header__optionMain">
        <Link className="header__link" to="/">
          Frame
        </Link>
      </div>
      <div className="header__optionSub">
        <Link className="header__link" to="/blog">
          Blog{" "}
        </Link>
      </div>
      <div className="header__optionSub">
        <Link className="header__link" to="/about">
          About{" "}
        </Link>
      </div>
      <div className="header__optionSub">
        <Link className="header__link" to="/tennis-book">
          Book{" "}
        </Link>
      </div>
      <div className="header__optionSub">
        <Link className="header__link" to="/profile">
          Profile{" "}
        </Link>
      </div>
      <div className="header__optionEnd">
        <Link className="header__link" to="/login">
          Login & Register
          {/* Also have to figure out Logout */}{" "}
        </Link>
      </div>
    </nav>
  );
}

export default Header;
