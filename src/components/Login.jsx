import React, { useState } from "react";

const Login = () => {
  const [login, setLogin] = useState(true);
  const [register, setRegister] = useState(false);

  const handleAuth = () => {
    setLogin(!login);
    setRegister(!register);
  };

  const [userData, setUserData] = useState({
    fullname: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleUpdate = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (register) {
      if (!agreedToTerms) {
        alert("You must agree to the Terms and Conditions.");
        return;
      }
      const outgoingData = {
        fullname: userData.fullname,
        email: userData.email,
        phone: userData.phone,
        password: userData.password,
        confirmPassword: userData.confirmPassword,
        agreedToTerms: agreedToTerms
      };
      console.log("Outgoing registration data ready:", outgoingData);
    } else if (login) {
      const outgoingData = {
        email: userData.email,
        password: userData.password
      };
      console.log("Outgoing login data ready:", outgoingData);
    }
  };
  return (
    <>
      {login && (
        <div className="login-form">
          <h2>Sign In</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Email"
              name="email"
              onChange={handleUpdate}
            />
            <br />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleUpdate}
            />
            <br />
            <div className="remember">
              <input type="checkbox" />
              <span>Remember me</span>
            </div>
            <button type="submit">Sign in</button>
            <br />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "50px",
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
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Fullname"
              name="fullname"
              onChange={handleUpdate}
            />
            <br />
            <input
              type="text"
              placeholder="Email"
              name="email"
              onChange={handleUpdate}
            />
            <br />
            <input
              type="tel"
              placeholder="Phone Number"
              name="phone"
              onChange={handleUpdate}
            />
            <br />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleUpdate}
            />
            <br />
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              onChange={handleUpdate}
            />
            <div className="terms">
              <input
                type="checkbox"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
              />
              <span>I agree to the Terms and Conditions</span>
            </div>
            <button type="submit">Sign Up</button>
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
