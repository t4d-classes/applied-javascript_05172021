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
  }

  doDeleteCar(carId: number) {
    this.cars = this.cars.filter((c) => c.id !== carId);
  }
}
