import { useState } from "react";

import { ToolHeader } from "./ToolHeader";
import { ItemList } from "./ItemList";
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
      <ToolHeader headerText="Color Tool" />
      <ItemList items={colors} contentFn={(i) => i.name} />
      <ColorForm buttonText="Add Color" onSubmitColor={appendColor} />
    </>
  );
};
