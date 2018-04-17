import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/">
          <h1 className="App-title">&lsaquo; zero - plus &rsaquo;</h1>
        </Link>
      </header>
    </div>
  );
};

export default Header;
