import { useState } from "react";

import { ColorForm } from "./ColorForm";

export const ColorTool = (props) => {
  const [colors, setColors] = useState([...props.colors]);

  const appendColor = (newColor) => {
    setColors([
      ...colors,
      {
        ...newColor,
        id: Math.max(...colors.map((color) => color.id), 0) + 1,
      },
    ]);
  };

  return (
    <>
      <header>
        <h1>Color Tool</h1>
      </header>
      <ul>
        {colors.map((color) => (
          <li key={color.id}>{color.name}</li>
        ))}
      </ul>
      <ColorForm buttonText="Add Color" onSubmitColor={appendColor} />
    </>
  );
};
