export const ColorTool = () => {
  const headerText = "Color Tool";
  const colors = [
    { id: 1, name: "green" },
    { id: 2, name: "white" },
    { id: 3, name: "saffron" },
    { id: 4, name: "red" },
    { id: 5, name: "gold" },
    { id: 6, name: "blue" },
    { id: 7, name: "black" },
  ];

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
    </>
  );
};
