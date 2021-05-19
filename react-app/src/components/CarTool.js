import { useState } from "react";

import { ToolHeader } from "./ToolHeader";
import { CarTable } from "./CarTable";
import { CarForm } from "./CarForm";

export const CarTool = (props) => {
  const [cars, setCars] = useState([...props.cars]);
  const [editCarId, setEditCarId] = useState(-1);

  const appendCar = (newCar) => {
    setCars([
      ...cars,
      {
        ...newCar,
        id: Math.max(...cars.map((car) => car.id), 0) + 1,
      },
    ]);
    setEditCarId(-1);
  };

  const replaceCar = (car) => {
    const newCars = [...cars];
    const carIndex = newCars.findIndex((c) => c.id === car.id);
    newCars[carIndex] = car;
    setCars(newCars);
    setEditCarId(-1);
  };

  const removeCar = (carId) => {
    setCars(cars.filter((c) => c.id !== carId));
    setEditCarId(-1);
  };

  const cancelCar = () => {
    setEditCarId(-1);
  };

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable
        cars={cars}
        editCarId={editCarId}
        onEditCar={setEditCarId}
        onDeleteCar={removeCar}
        onSaveCar={replaceCar}
        onCancelCar={cancelCar}
      />
      <CarForm buttonText="Add Car" onSubmitCar={appendCar} />
    </>
  );
};
