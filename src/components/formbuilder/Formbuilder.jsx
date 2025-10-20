import React from "react";

function Formbuilder({ forms, formValues, handleFormChange }) {
  /* @devs: Customizable form builder to create user-filled data-form
  pass on the form fields as array of ojects
  pass on form field-values as an object after the formsField array has been reduced,
  pass on the formField changes handler and  handle the submission anywhere within the parent component */
  const FORM = forms.map((input) => {
    switch (input.type) {
      case "radio":
        return (
          <div className="h-auto justify-start items-start w-full">
            <label className="gap-10 flex justify-start items-center p-1">
              <b className="text-gray-500 font-bold">{input.name}</b>
              <div>
                <input
                  type="radio"
                  onChange={(e) =>
                    handleFormChange(input.name, input.options[0])
                  }
                  name={input.name}
                  className="p-5 bg-gray-200 rounded-md"
                />
                <p>{input.options[0]}</p>
              </div>

              <div>
                <input
                  type="radio"
                  onChange={(e) =>
                    handleFormChange(input.name, input.options[1])
                  }
                  name={input.name}
                  className="p-5 bg-gray-200"
                />
                <p>{input.options[1]}</p>
              </div>
            </label>
          </div>
        );
      case "checkbox":
        return (
          <div className="flex justify-start items-start p-1 h-auto w-full">
            <label className="terms">
              <input
                // className="ml-3"
                type="checkbox"
                onChange={(e) => handleFormChange(input.name, e.target.checked)}
                value={formValues[input.value]}
              />
              <b className="agreement">{input.name}</b>
            </label>
          </div>
        );
      default:
        return (
          <label className="p-1 h-auto flex-col flex w-full">
            {" "}
            <b className="text-gray-500 font-bold text-left">{input.name}</b>
            <input
              value={formValues[input.name]}
              type="text"
              placeholder={input.placeholder}
              onChange={(e) => handleFormChange(input.name, e.target.value)}
              className="input-text"
            />
          </label>
        );
    }
  });

  return <>{FORM}</>;
}

export default Formbuilder;
