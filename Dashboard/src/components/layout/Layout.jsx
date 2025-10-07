import React from "react";
import SideBar from "./SideBar";

const Layout = ({ children, handler }) => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <SideBar handler={handler} />
        {children}
      </div>
    </>
  );
};

export default Layout;
