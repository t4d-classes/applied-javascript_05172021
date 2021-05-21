import React, { useEffect, useState } from "react";

// import { useList } from '../hooks/useList';
import { ToolHeader } from "./ToolHeader";
import { ColorForm } from "./ColorForm";

export const ColorTool = (props) => {
  const [colors, setColors] = useState(props.colors.concat());

  useEffect(() => {
    fetch("/api/colors")
      .then((res) => res.json())
      .then((colors) => setColors(colors));
  }, []);

  const addColor = async (color) => {
    await fetch("/api/colors", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(color),
    });

    const res = await fetch("/api/colors");
    const colors = await res.json();
    setColors(colors);
  };

  const deleteColor = async (colorId) => {
    await fetch("/api/colors/" + encodeURIComponent(colorId), {
      method: "DELETE",
    });

    const res = await fetch("/api/colors");
    const colors = await res.json();
    setColors(colors);
  };

  return (
    <>
      <ToolHeader headerText="Color Tool" />
      <ul>
        {colors.map((color) => (
          <li key={color.id}>
            {color.name}
            <button type="button" onClick={() => deleteColor(color.id)}>
              X
            </button>
          </li>
        ))}
      </ul>
      <ColorForm onSubmitColor={addColor} buttonText="Add Color" />
    </>
  );
};
