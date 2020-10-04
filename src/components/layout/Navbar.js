import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ logo, search }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="pt-2">
      <div className="container">
        <nav>
          <Link to="/" className="logo">
            <img src={logo} alt="" />
          </Link>
          <div className="menu-container">
            <div
              className={`responsive ${toggle && "toggle"}`}
              onClick={() => setToggle(!toggle)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div
              className={`responsive-desktop ${toggle && "responsive-toggle"}`}
            >
              <form className="form">
                <div className="form-group">
                  <label htmlFor="search">
                    <img src={search} alt="" />
                    <input
                      type="text"
                      placeholder="Search your Destination..."
                    />
                  </label>
                </div>
              </form>
              <ul className="menu">
                <li className="ml-3">
                  <Link to="/news">News</Link>
                </li>
                <li className="ml-3">
                  <Link to="/destination">destination</Link>
                </li>
                <li className="ml-3">
                  <Link to="/blog">blog</Link>
                </li>
                <li className="ml-3">
                  <Link to="/contact">contact</Link>
                </li>
                <li className="ml-3">
                  <Link className="btn" to="/contact">
                    login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
