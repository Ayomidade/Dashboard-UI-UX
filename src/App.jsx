import "./App.css";
import Home from "./pages/Home";
import React from "react";
import __Route from "./routes/__Route";
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
      <__Route />
    </>
  );
}

export default App;
