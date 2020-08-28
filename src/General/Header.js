import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <nav className="header">
      <div className="header__optionMain">
        <Link className="header__linkBig" to="/">
          Frame
        </Link>
      </div>
      <div className="header__optionSub">
        <Link className="header__link" to="/blog">
          Blog
        </Link>
      </div>
      <div className="header__optionSub">
        <Link className="header__link" to="/about">
          About
        </Link>
      </div>
      <div className="header__optionSub">|</div>
      <div className="header__optionSub">
        <Link className="header__link" to="/tennis-book">
          Book
        </Link>
      </div>
      <div className="header__optionSub">
        <Link className="header__link" to="/profile">
          Profile
        </Link>
      </div>
      <div className="header__optionEnd">
        <Link className="header__linkEnd" to="/login">
          Login
          {/* Also have to figure out Logout */}{" "}
        </Link>
        <Link className="header__linkEnd" to="/register">
          Register
          {/* Also have to figure out Logout */}{" "}
        </Link>
      </div>
    </nav>
  );
}

export default Header;
