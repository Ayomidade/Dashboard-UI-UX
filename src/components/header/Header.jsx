import React, { useState } from "react";
import {
  FaShoppingCart,
  FaUser,
  FaSearch,
  FaSignOutAlt,
  FaHamburger,
  FaBars,
} from "react-icons/fa";
import { useAuthProvider } from "../../context/AuthProvider";
import SideBar from "../layout/SideBar";

const Header = () => {
  const [isSearching, setIsSearching] = useState(false);
  const { user, signOutHandler } = useAuthProvider();

  const toggleSearch = () => {
    setIsSearching(!isSearching);
  };
  // console.log(user);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log("Menu toggled:", !isMenuOpen);
  };

  return (
    <header className="header">
      <div className="promo-bar">
        <p>🎉 Big Sale! Get up to 30% off selected items this week only 🎉</p>
      </div>

      <div className="header-main">
        <div className="logo">
          <h2>
            Shared<span>Homes</span>
          </h2>
          <p>Welcome back, {user?.firstname}</p>
        </div>

        <div className="menu">
          <FaBars className="icon" title="Menu" onClick={toggleMenu} />
        </div>

        {isMenuOpen && (
          <div className="mobile-menu">
            <div className="header-icons">
              <FaSearch
                className="icon"
                title="Search"
                onClick={toggleSearch}
              />
              {isSearching && (
                <div className="searchbar">
                  <input type="text" placeholder="Search.." />
                </div>
              )}
              {!isSearching && (
                <>
                  <FaUser className="icon" title="Account" />
                  <FaShoppingCart className="icon" title="Cart" />
                  <FaSignOutAlt
                    className="icon"
                    title="Log out"
                    onClick={signOutHandler}
                  />
                </>
              )}
            </div>
          </div>
        )}

        <div className="header-icons">
          <FaSearch className="icon" title="Search" onClick={toggleSearch} />
          {isSearching && (
            <div className="searchbar">
              <input type="text" placeholder="Search.." />
            </div>
          )}
          <FaUser className="icon" title="Account" />
          <FaShoppingCart className="icon" title="Cart" />
          <FaSignOutAlt
            className="icon"
            title="Log out"
            onClick={signOutHandler}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
