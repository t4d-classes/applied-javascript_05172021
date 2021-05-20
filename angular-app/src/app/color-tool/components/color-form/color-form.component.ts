import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { NewColor } from '../../models/color';

@Component({
  selector: 'app-color-form',
  templateUrl: './color-form.component.html',
  styleUrls: ['./color-form.component.css'],
})
export class ColorFormComponent implements OnInit {
  @Input()
  buttonText = 'Submit Color';

  @Output()
  submitColor = new EventEmitter<NewColor>();

  colorForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.colorForm = this.fb.group({
      name: '',
      hexcode: '',
    });
  }

  doSubmitColor() {
    this.submitColor.emit(this.colorForm.value);
  }
}
