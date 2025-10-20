import React from "react";
import SideBar from "./SideBar";

const Layout = ({ children, handler }) => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", maxHeight:"100vh"}}>
        <SideBar handler={handler} />
        <div style={{ overflowY: "scroll", width: "80%" }}>{children}</div>
      </div>
    </>
  );
};

export default Layout;
