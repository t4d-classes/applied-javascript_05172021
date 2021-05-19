import { useState } from "react";

export const CarEditRow = ({ car }) => {
  const [
    carForm, // current state date
    setCarForm, // updates the state, and trigger a re-render
  ] = useState(
    {
      make: car.make,
      model: car.model,
      year: car.year,
      color: car.color,
      price: car.price,
    } /* initial state value */
  );

  const change = (e) => {
    setCarForm({
      ...carForm,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <tr>
      <td>{car.id}</td>
      <td>
        <input
          type="text"
          id="make-input"
          name="make"
          value={carForm.make}
          onChange={change}
        />
      </td>
      <td>
        <input
          type="text"
          id="model-input"
          name="model"
          value={carForm.model}
          onChange={change}
        />
      </td>
      <td>
        <input
          type="text"
          id="year-input"
          name="year"
          value={carForm.year}
          onChange={change}
        />
      </td>
      <td>
        <input
          type="text"
          id="color-input"
          name="color"
          value={carForm.color}
          onChange={change}
        />
      </td>
      <td>
        <input
          type="number"
          id="price-input"
          name="price"
          value={carForm.price}
          onChange={change}
        />
      </td>
      <td>
        <button type="button" onClick={() => null}>
          Save
        </button>
        <button type="button" onClick={() => null}>
          Cancel
        </button>
      </td>
    </tr>
  );
};
