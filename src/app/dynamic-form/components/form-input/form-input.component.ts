import { Component, ViewContainerRef } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  template: `

  <div class="form-group" [formGroup]="group">
  <label for="exampleInputEmail1">{{ config.label }}</label>
  <input
    [type]="config.input_type"
    class="form-control"
    [attr.placeholder]="config.placeholder"
    [formControlName]="config.name">
  </div>
  `,
  styleUrls: ['./form-input.component.scss']
})

export class FormInputComponent {
  config;
  group: UntypedFormGroup;

}
