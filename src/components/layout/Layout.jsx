import React from "react";
import SideBar from "./SideBar";
import { useAuthProvider } from "../../context/AuthProvider";
import Onboarding from "../Onbaoarding/Onbaoarding";

const Layout = ({ children, handler }) => {
  const { isAuthenticated, user } = useAuthProvider();

  if (!isAuthenticated) return <Onboarding />;
  // console.log(user);
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          maxHeight: "100vh",
        }}
      >
        <SideBar handler={handler} />
        <div
          style={{ overflowY: "scroll", width: "80%", scrollbarWidth: "none" }}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
