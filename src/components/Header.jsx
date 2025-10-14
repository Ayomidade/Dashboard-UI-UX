import React from "react";
import { FaShoppingCart, FaUser, FaSearch } from "react-icons/fa";
// import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      {/* Promo Bar */}
      <div className="promo-bar">
        <p>🎉 Big Sale! Get up to 30% off selected items this week only 🎉</p>
      </div>

      {/* Main Header */}
      <div className="header-main">
        <div className="logo">
          <h2>
            Power<span>Pixel</span>
          </h2>
        </div>

        <div className="header-icons">
          <FaSearch className="icon" title="Search" />
          <FaUser className="icon" title="Account" />
          <FaShoppingCart className="icon" title="Cart" />
        </div>
      </div>
    </header>
  );
};

export default Header;
