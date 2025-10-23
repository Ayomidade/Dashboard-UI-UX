import React, { useState } from "react";
import { useAuthProvider } from "../../context/AuthProvider";
import Formbuilder from "../formbuilder/Formbuilder";
const Login = () => {
  const value = useAuthProvider();

  const [login, setLogin] = useState(true);
  const [register, setRegister] = useState(false);
  const { SignUp, SignIn } = value;
  const [loading, setLoading] = useState(false);
  // console.log(SignUp);
  const forms = [
    {
      name: "Firstname",
      type: "text",
      placeholder: "Enter first name",
      value: "",
    },
    {
      name: "Lastname",
      type: "text",
      placeholder: "Enter last name",
      value: "",
    },
    {
      name: "Email",
      type: "email",
      placeholder: "Enter Email",
      value: "",
    },

    {
      name: "Password",
      type: "password",
      placeholder: "Enter Password",
      value: "",
    },
    {
      name: "Confirm Password",
      type: "password",
      placeholder: "Confirm Password",
      value: "",
    },

    {
      name: "Role",
      type: "select",
      placeholder: "Select your role",
      value: "",
      options: ["Property owner", "Renter"],
    },

    {
      name: "I agree to the Terms and Conditions",
      type: "checkbox",
      value: false,
    },
  ];

  // form values
  const values = forms.reduce(
    (acc, curr) => ({
      ...acc,
      [curr.name]: curr.value,
    }),
    {}
  );

  const [formValues, setFormValues] = useState(values);
  //
  const handleFormChange = (key, value) => {
    setFormValues((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const { Firstname, Lastname, Email, Password, Role } = formValues;
    // console.log(formValues);
    setLoading(true);
    try {
      await SignUp(Firstname, Lastname, Email, Password, Role);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // sign in form data

  const signInForm = [
    {
      name: "Email",
      type: "email",
      placeholder: "Enter Email",
      value: "",
    },

    {
      name: "Password",
      type: "password",
      placeholder: "Enter Password",
      value: "",
    },
    {
      name: "Remember me",
      type: "checkbox",
      value: false,
    },
  ];

  // form values
  const signInValues = signInForm.reduce(
    (acc, curr) => ({
      ...acc,
      [curr.name]: curr.value,
    }),
    {}
  );

  const [signInFormValue, setSignInFormValues] = useState(signInValues);

  const handleSignInFormChange = (key, value) => {
    setSignInFormValues((prev) => ({ ...prev, [key]: value }));
  };

  const handleAuth = () => {
    setLogin(!login);
    setRegister(!register);
  };

  const handleSignInSubmitForm = async (e) => {
    e.preventDefault();
    const { Email, Password } = signInFormValue;
    setLoading(true);
    try {
      await SignIn(Email, Password);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {login && (
        <div className="auth">
          <div className="welcome-message">
            <h3>Welcome Back</h3>
            <p>
              Your next home is just a sign-in away. Access your saved listings,
              explore new properties, and continue your journey toward finding
              the perfect place to call home.
            </p>
          </div>
          <div className="login-form">
            <h2>Sign In</h2>
            <form action="">
              <Formbuilder
                forms={signInForm}
                formValues={signInFormValue}
                handleFormChange={handleSignInFormChange}
              />

              <button onClick={handleSignInSubmitForm}>
                {loading ? "Please wait" : "Sign In"}
              </button>
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
        </div>
      )}

      {register && (
        <div className="auth">
          <div className="welcome-message">
            <h3>Welcome</h3>
            <p>
              Sign up to explore verified homes and apartments tailored to your
              lifestyle and budget. Save your favorite listings, schedule
              viewings, and find the perfect place to call home — all in one
              place.
            </p>
          </div>
          <div className="register-form">
            <h2>Register</h2>
            <form action="" className="">
              <Formbuilder
                forms={forms}
                formValues={formValues}
                handleFormChange={handleFormChange}
              />
              <button onClick={handleSubmitForm}>
                {loading ? "Please wait" : "Register"}
              </button>
              <p>
                Already have an account? <a onClick={handleAuth}>Sign in</a>
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
