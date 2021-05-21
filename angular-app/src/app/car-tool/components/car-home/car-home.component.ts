import { Component, OnInit } from '@angular/core';

import { NewCar, Car } from '../../models/car';

@Component({
  selector: 'app-car-home',
  templateUrl: './car-home.component.html',
  styleUrls: ['./car-home.component.css'],
})
export class CarHomeComponent implements OnInit {
  headerText = 'Car Tool';

  cars: Car[] = [];
  editCarId = -1;

  constructor() {}

  ngOnInit() {}

  doAddCar(car: NewCar) {
    this.cars = [
      ...this.cars,
      {
        ...car,
        id: Math.max(...this.cars.map((c) => c.id), 0) + 1,
      },
    ];
    this.editCarId = -1;
  }

  doSaveCar(car: Car) {
    const newCars = [ ...this.cars ];
    const carIndex = newCars.findIndex(c => c.id === car.id);
    newCars[carIndex] = car;
    this.cars = newCars;
    this.editCarId = -1;
  }

  doDeleteCar(carId: number) {
    this.cars = this.cars.filter((c) => c.id !== carId);
    this.editCarId = -1;
  }

  doEditCar(carId: number) {
    this.editCarId = carId;
  }

  doCancelCar() {
    this.editCarId = -1;
  }
}
