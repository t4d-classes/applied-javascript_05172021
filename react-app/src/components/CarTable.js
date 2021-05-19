import { CarEditRow } from "./CarEditRow";
import { CarViewRow } from "./CarViewRow";

export const CarTable = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Make</th>
          <th>Model</th>
          <th>Year</th>
          <th>Car</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {props.cars.map((car) =>
          car.id === props.editCarId ? (
            <CarEditRow key={car.id} car={car} />
          ) : (
            <CarViewRow
              key={car.id}
              car={car}
              onEditCar={props.onEditCar}
              onDeleteCar={props.onDeleteCar}
            />
          )
        )}
      </tbody>
    </table>
  );
};
