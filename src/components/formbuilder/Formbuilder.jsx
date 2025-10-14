function Formbuilder({ forms }) {
  const FORM = forms.map((input) => {
    switch (input.type) {
      case "radio":
        return (
          <div>
            <input type="radio" className="type" name="gender" />
            <input type="radio" className="type" name="gender" />
          </div>
        );
      case "checkbox":
        return (
          <div>
            <label>
              <input type="checkbox" />
            </label>
          </div>
        );
      default:
        return (
          <div>
            <input type="text" />
          </div>
        );
    }
  });

  return <>{FORM}</>;
}

export default Formbuilder;
