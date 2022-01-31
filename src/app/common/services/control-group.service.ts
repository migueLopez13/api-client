import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ControlGroupService {
  constructor(private formBuilder: FormBuilder) {}

  private formControlESP = this.formBuilder.group({
    name: [
      '',
      [Validators.minLength(3), Validators.maxLength(255), Validators.required],
    ],
    surname: [
      '',
      [Validators.minLength(3), Validators.maxLength(255), Validators.required],
    ],
    dni: [
      '',
      [
        Validators.pattern(/^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/i),
        Validators.required,
      ],
    ],
    password: [
      '',
      [Validators.minLength(3), Validators.maxLength(255), Validators.required],
    ],
    phone: [
      '',
      [
        Validators.pattern(/(\+34|0034|34)?[-]*(6|7)[-]*([0-9][-]*){8}/),
        Validators.required,
      ],
    ],
    gender: ['', [Validators.pattern(/Man|Woman/), Validators.required]],
    address: [
      '',
      [Validators.minLength(3), Validators.maxLength(255), Validators.required],
    ],
  });

  getGroup(): FormGroup {
    return this.formControlESP;
  }
}
