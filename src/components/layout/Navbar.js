import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ logo, search, black, user, logout }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <header
      className={`pt-2 ${
        document.documentElement.scrollTop > 100 ? "stick-nav" : ""
      }`}
      style={{
        color: black ? "black" : "white",
      }}
    >
      <div
        className={`container ${black ? "pb-1" : ""}`}
        style={{ borderBottom: black ? " 1px solid #d1d1d1" : 0 }}
      >
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
                  <label
                    htmlFor="search"
                    style={{ display: black ? "none" : "block" }}
                  >
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
                  <Link to="#">News</Link>
                </li>
                <li className="ml-3">
                  <Link to="#">destination</Link>
                </li>
                <li className="ml-3">
                  <Link to="#">blog</Link>
                </li>
                <li className="ml-3">
                  <Link to="#">contact</Link>
                </li>
                {user ? (
                  <li className="ml-3 name">
                    <b>{user && user.displayName}</b>
                    <div className="ul-container">
                      <ul className="mt-2">
                        <li>Account</li>
                        <li>Profile</li>
                        <li>Setting</li>
                        <li className="btn" onClick={() => logout()}>
                          logOut
                        </li>
                      </ul>
                    </div>
                  </li>
                ) : (
                  <li className="ml-3">
                    <Link className="btn" to="/login">
                      login
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
