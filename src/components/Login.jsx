import React, { useState } from "react";

const Login = () => {
  const [login, setLogin] = useState(true);
  const [register, setRegister] = useState(false);

  const handleAuth = () => {
    setLogin(!login);
    setRegister(!register);
  };

  return (
    <>
      {login && (
        <div className="login-form">
          <h2>Sign In</h2>
          <form action="">
            <input type="text" placeholder="Email" />
            <br />
            <input type="password" placeholder="Password" />
            <br />
            <div className="remember">
              <input type="checkbox" />
              <span>Remember me</span>
            </div>
            <button>Sign in</button>
            <br />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap:"50px"
              }}
            >
              <p>
                Don't have an account? <a onClick={handleAuth}>Sign up</a>
              </p>
              <p>Forgotten Password?</p>
            </div>
          </form>
        </div>
      )}

      {register && (
        <div className="register-form">
          <h2>Register</h2>
          <form action="">
            <input type="text" placeholder="Fullname" />
            <br />
            <input type="text" placeholder="Email" />
            <br />
            <input type="tel" placeholder="Phone Number" />
            <br />
            <input type="password" placeholder="Password" />
            <br />
            <input type="password" placeholder="Confirm Password" />
            {/* <br /> */}
            <div className="terms">
              <input type="checkbox" />
              <span>I agree to the Terms and Conditions</span>
            </div>
            <button onClick={handleAuth}>Sign Up</button>
            <br />
            <p>
              Already have an account? <a onClick={handleAuth}>Sign in</a>
            </p>
          </form>
        </div>
      )}
    </>
  );
};

export default Login;
