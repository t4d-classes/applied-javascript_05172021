import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { NewCar } from '../../models/car';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css'],
})
export class CarFormComponent implements OnInit {
  showValidationSummary = false;

  @Input()
  buttonText = 'Submit Car';

  @Output()
  submitCar = new EventEmitter<NewCar>();

  carForm!: FormGroup;

  carColors = ['red', 'green', 'blue'];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.carForm = this.fb.group({
      make: '',
      model: '',
      year: 1900,
      color: '',
      price: 0,
    });
  }

  doSubmitCar() {
    this.submitCar.emit({
      ...this.carForm.value,
    });
  }
}
