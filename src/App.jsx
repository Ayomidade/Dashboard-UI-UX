import "./App.css";
<<<<<<< HEAD
import React, { useState } from "react";
import __Route from "./routes/__Route";
import Formbuilder from "./components/formbuilder/Formbuilder";
=======
import Home from "./pages/Home";
import React from "react";

>>>>>>> dba43792e64f3667e67fe83fb1aff9d2207eb040
function App() {
  // const forms = [
  //   {
  //     name: "Username",
  //     type: "text",
  //     placeholder: "Enter username",
  //     value: "",
  //   },
  //   {
  //     name: "Email",
  //     type: "email",
  //     placeholder: "Enter Email",
  //     value: "",
  //   },

  //   {
  //     name: "Password",
  //     type: "password",
  //     placeholder: "Enter Password",
  //     value: "",
  //   },
  //   {
  //     name: "Weekly newsletter",
  //     type: "checkbox",
  //     placeholder: "Subscribe to newsletter",
  //     value: false,
  //   },
  //   {
  //     name: "Gender",
  //     type: "radio",
  //     placeholder: "Your Gender",
  //     value: "",
  //     options: ["male", "female"],
  //   },
  // ];

  // // form values
  // const values = forms.reduce(
  //   (acc, curr) => ({
  //     ...acc,
  //     [curr.name]: curr.value,
  //   }),
  //   {}
  // );

  // const [formValues, setFormValues] = useState(values);
  // //
  // const handleFormChange = (key, value) => {
  //   setFormValues((prev) => ({ ...prev, [key]: value }));
  // };

  // const handleSubmitForm = () => {
  //   console.log(formValues);
  // };

  return (
    <>
<<<<<<< HEAD
      {/* <div className="relative flex justify-between items-center">
        <div></div>

        <div className="w-[50%] border grid grid-cols-1 p-10">
          <Formbuilder
            forms={forms}
            handleFormChange={handleFormChange}
            formValues={formValues}
            handleSubmit={handleSubmitForm}
          />
          <div className="p-3 w-full h-24">
            <button 
            onClick={handleSubmitForm}
            className="p-3 w-[100%] h-12 rounded-10 bg-black transition duration-400 text-white font-500 hover:bg-[rgba(0, 0, 0, 0.58)]">
              Submit
            </button>
          </div>
        </div>
      </div> */}
      <__Route />
=======
      {/* <SignUp/> */}
      <Home />
>>>>>>> dba43792e64f3667e67fe83fb1aff9d2207eb040
    </>
  );
}

export default App;
