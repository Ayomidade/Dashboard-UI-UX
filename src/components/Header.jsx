import React, { useState } from "react";
import { FaShoppingCart, FaUser, FaSearch, FaSignOutAlt } from "react-icons/fa";
import { useAuthProvider } from "../context/AuthProvider";
import { useSelector } from "react-redux";

const Header = () => {
  const { watchList } = useSelector((store) => {
    store.watchListSlice;
  });
  const [isSearching, setIsSearching] = useState(false);
  const { user, signOutHandler } = useAuthProvider();


  const toggleSearch = () => {
    setIsSearching(!isSearching);
  };
  // console.log(user);

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
            <span style={{ position: "absolute", right: 0, top: 0 }}>
              <p style={{ color: "black" }}>{watchList.length}</p>
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
