import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-clima-buscador-reactive',
  templateUrl: './clima-buscador-reactive.component.html',
  styleUrl: './clima-buscador-reactive.component.css',
})
export class ClimaBuscadorReactiveComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      buscador: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
    });
    console.log(this.form);
  }
}
