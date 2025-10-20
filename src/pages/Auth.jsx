import React, { useState } from "react";
import Register from "../components/Register";
import Login from "../components/Onbaoarding/Onbaoarding";

const Auth = () => {
  // const [login, setLogin] = useState(true);
  // const [register, setRegister] = useState(false);

  // const handleAuth = () => {
  //   setLogin(!login)
  //   setRegister(!register)
  //  }

  return (
    <>
      <div className="auth"
      >
        <div className="welcome-message">
          <h3>Welcome</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            nesciunt corrupti iusto tempora consectetur, atque possimus
            provident! Illum, tenetur corrupti repellat quasi deserunt
            temporibus quis.
          </p>
        </div>
      </div>
    </>
  );
};

export default Auth;
