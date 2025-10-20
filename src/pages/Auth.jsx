import React, { useState } from "react";
import Register from "../components/Register";
import Login from "../components/Login";

const Auth = () => {
  // const [login, setLogin] = useState(true);
  // const [register, setRegister] = useState(false);

  // const handleAuth = () => {
  //   setLogin(!login)
  //   setRegister(!register)
  //  }

  return (
    <>
      <div
        style={{
          width: "80%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px",
          gap: "30px",
        }}
      >
        <div>
          <h3>Welcome</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            nesciunt corrupti iusto tempora consectetur, atque possimus
            provident! Illum, tenetur corrupti repellat quasi deserunt
            temporibus quis.
          </p>
        </div>
        <Login />
      </div>
    </>
  );
};

export default Auth;
