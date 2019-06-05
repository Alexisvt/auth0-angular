import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ItemFormService {
  form: FormGroup;

  constructor(private readonly fb: FormBuilder) {}

  init(): FormGroup {
    this.form = this.fb.group({
      name: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
    });
    return this.form;
  }
}
