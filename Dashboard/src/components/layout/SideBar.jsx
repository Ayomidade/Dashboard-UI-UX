import React from "react";

const SideBar = ({handler}) => {
  return (
    <>
      <div className="side-menu">
        <h1>
          Power<span>Pixel</span>
        </h1>
        <div className="side-main">
          <p>MAIN</p>
          <ul>
            <li>
              <button onClick={() => handler("dashboard")}>Dashboard</button>
            </li>
            <li>
              <button onClick={() => handler("orders")}>Orders</button>
            </li>
            <li>
              <button onClick={() => handler("analytics")}>Analytics</button>
            </li>
            <li>
              <button onClick={() => handler("categories")}>Categories</button>
            </li>
            <li>
              <button onClick={() => handler("collections")}>
                Collections
              </button>
            </li>
            <li>
              <button onClick={() => handler("products")}>Products</button>
            </li>
            <li>
              <button onClick={() => handler("discounts")}>Discounts</button>
            </li>
            <li>
              <button onClick={() => handler("employees")}>Employees</button>
            </li>
            <li>
              <button onClick={() => handler("customers")}>Customers</button>
            </li>
          </ul>
        </div>
        <div className="sales-channel">
          <p>SALES CHANNELS</p>
          <ul>
            <li>
              <button onClick={() => handler("onlineStore")}>
                Online Store
              </button>
            </li>
            <li>
              <button onClick={() => handler("marketing")}>Marketing</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideBar;
