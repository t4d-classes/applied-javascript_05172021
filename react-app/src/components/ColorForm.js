import { useState } from "react";

export const ColorForm = (props) => {
  const [
    colorForm, // current state date
    setColorForm, // updates the state, and trigger a re-render
  ] = useState(
    {
      name: "",
      hexcode: "",
    } /* initial state value */
  );

  const change = (e) => {
    setColorForm({
      ...colorForm,
      [e.target.name]: e.target.value,
    });
  };

  const submitColor = () => {
    props.onSubmitColor({ ...colorForm });

    setColorForm({
      name: "",
      hexcode: "",
    });
  };

  return (
    <form>
      <div>
        <label htmlFor="color-name-input">Color Name:</label>
        <input
          id="color-name-input"
          type="text"
          name="name"
          value={colorForm.name}
          onChange={change}
        />
      </div>
      <div>
        <label htmlFor="color-hexcode-input">Color Hexcode:</label>
        <input
          id="color-hexcode-input"
          type="text"
          name="hexcode"
          value={colorForm.hexcode}
          onChange={change}
        />
      </div>
      <button type="button" onClick={submitColor}>
        {props.buttonText}
      </button>
    </form>
  );
};
