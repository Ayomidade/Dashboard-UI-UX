import React from "react";

const Register = () => {
  return (
    <>
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
          <button>Sign Up</button>
          <br />
          <p>Already have an account? <a href="#">Sign in</a></p>
        </form>
      </div>
    </>
  );
};

export default Register;
