import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Car } from '../../models/car';

@Component({
  selector: '.app-car-view-row',
  templateUrl: './car-view-row.component.html',
  styleUrls: ['./car-view-row.component.css'],
})
export class CarViewRowComponent implements OnInit {
  @Input()
  car!: Car;

  @Output()
  deleteCar = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  doDeleteCar(carId: number) {
    this.deleteCar.emit(carId);
  }
}
