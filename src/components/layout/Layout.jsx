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
          height: "100vh",
        }}
      >
        <SideBar handler={handler} />
        <div className="children"
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
