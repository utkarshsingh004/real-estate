import React, { useState, useEffect } from "react";
import "./Header.css";
import Menubar from "../Menubar/Menubar";
import { Link, useNavigate } from "react-router-dom";
import { loginExport } from "../../verification/Login/Login";
import { use } from "react";

let navigate=useNavigate

const Header = () => {
  const [symbol, setSymbol] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);
  const [dropdownOpen, setDropdownOpen] = useState(null); // Track open dropdown

  let tok = loginExport();
  console.log("Header Token:", tok);

  function changeMenu() {
    setSymbol(!symbol);
    setMenuOpen((prev) => !prev);
  }

  // Handle dropdown toggle on click
  function toggleDropdown(menu) {
    setDropdownOpen((prev) => (prev === menu ? null : menu));
  }

  // Logout function

const handleLogout = () => {
    localStorage.removeItem("authToken"); // Remove token from storage
    navigate("/"); // Redirect to home page
    window.location.reload(); // Optional: Refresh the page to fully reset state
};


  // Handle responsive behavior on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000);
      if (window.innerWidth >= 1000) {
        setMenuOpen(true);
      } else {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src="logo.png" alt="Company Logo" />
        </Link>
      </div>

      <nav
        className={`nav ${menuOpen ? "open" : "closed"} ${
          isMobile ? "mobile" : ""
        }`}
      >
        <ul className="item">
          {/* Buy Menu */}
          <li onClick={() => toggleDropdown("buy")}>
              Buy
            <img src="https://img.icons8.com/?size=60&id=99992&format=png&color=FA5252" />
            {dropdownOpen === "buy" && (
              <div className="dropdown">
                <h4>House</h4>
                <h4>Flat</h4>
                <h4>Shop</h4>
              </div>
            )}
          </li>

          {/* Sell Menu */}
          <li onClick={() => toggleDropdown("sell")}>
              Sell
            <img src="https://img.icons8.com/?size=60&id=99992&format=png&color=FA5252" />
            {dropdownOpen === "sell" && (
              <div className="dropdown">
                <h4>Post Property</h4>
                <h4>Dashboard</h4>
              </div>
            )}
          </li>

          {/* Rent Menu */}
          <li onClick={() => toggleDropdown("rent")}>
              Rent
            <img src="https://img.icons8.com/?size=60&id=99992&format=png&color=FA5252" />
            {dropdownOpen === "rent" && (
              <div className="dropdown">
                <h4>House</h4>
                <h4>Flat</h4>
                <h4>Shop</h4>
              </div>
            )}
          </li>

          {/* Help Menu */}
          <li onClick={() => toggleDropdown("help")}>
              Help
            <img src="https://img.icons8.com/?size=60&id=99992&format=png&color=FA5252" />
            {dropdownOpen === "help" && (
              <div className="dropdown">
                <h4>About us</h4>
                <h4>Contact us</h4>
                <h4>FAQ</h4>
              </div>
            )}
          </li>

          {/* Profile Menu */}
          <li onClick={() => toggleDropdown("Profile")}>
              Profile
            <img src="https://img.icons8.com/?size=60&id=99992&format=png&color=FA5252" />
            {dropdownOpen === "Profile" && (
              <div className="dropdown">
                {!tok ? (
                  <>
                    <Link to="/signup" className="onHover">
                      Sign up
                    </Link>
                    <Link to="/login" className="onHover">
                      Log in
                    </Link>
                  </>
                ) : (
                  <>
                    <Link to="/dashboard" className="onHover">
                      My 💙
                    </Link>
                    <Link to="/" className="onHover" onClick={handleLogout}>
                      Log out
                    </Link>
                  </>
                )}
              </div>
            )}
          </li>
        </ul>
      </nav>

      {/* Mobile Menu Toggle */}
      {isMobile && (
        <Menubar
          image={
            symbol
              ? "https://img.icons8.com/?size=96&id=12371&format=png"
              : "https://img.icons8.com/?size=96&id=T9nkeADgD3z6&format=png"
          }
          changeMenuFunction={changeMenu}
        />
      )}
    </header>
  );
};

export default Header;
