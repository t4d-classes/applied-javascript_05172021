import { useState } from "react";

export const ColorTool = (props) => {
  const [colors, setColors] = useState([...props.colors]);

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

  const appendColor = () => {
    setColors([
      ...colors,
      {
        ...colorForm,
        id: Math.max(...colors.map((color) => color.id), 0) + 1,
      },
    ]);

    setColorForm({
      name: "",
      hexcode: "",
    });
  };

  const headerText = "Color Tool";

  console.log(colorForm);

  return (
    <>
      <header>
        <h1>{headerText}</h1>
      </header>
      <ul>
        {colors.map((color) => (
          <li key={color.id}>{color.name}</li>
        ))}
      </ul>
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
        <button type="button" onClick={appendColor}>
          Add Color
        </button>
      </form>
    </>
  );
};
