import { Component, ViewContainerRef } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  template: `
  <div class="form-group form-check" [formGroup]="group">
    <input type="checkbox" class="form-check-input" id="config.name" [formControlName]="config.name">
    <label class="form-check-label" for="config.name">{{ config.label }}</label>
  </div>
  `,
  styleUrls: ['./form-checkbox.component.scss']
})

export class FormCheckboxComponent {
  config;
  group: UntypedFormGroup;

}
