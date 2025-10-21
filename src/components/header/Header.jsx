import React, { useState } from "react";
import {
  FaShoppingCart,
  FaUser,
  FaSearch,
  FaSignOutAlt,
  FaBars,
} from "react-icons/fa";
import { useAuthProvider } from "../../context/AuthProvider";
import SideBar from "../layout/SideBar";
import { useSelector } from "react-redux";

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

  const { watchList } = useSelector((store) => store.watchListSlice);
  // console.log(watchList);
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
          <div style={{ position: "relative" }}>
            <FaShoppingCart className="icon" title="Cart" />
            <span style={{ position: "absolute", right: -4, top: -10 }}>
              <p
                style={{
                  color: "#e74c3c",
                  fontWeight: "bolder",
                  textShadow: "2px 2px 2px black",
                }}
              >
                {watchList.length}
              </p>
            </span>
          </div>
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
