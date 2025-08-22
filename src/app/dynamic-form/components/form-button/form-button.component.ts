import { Component } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'form-button',
  styleUrls: ['form-button.component.scss'],
  template: `
  <div class="d-flex justify-content-center mb-3" [formGroup]="group">
    <button type="submit" class="btn btn-primary" [disabled]="!group.valid">{{ config.label }}</button>
  </div>
  `,
})
export class FormButtonComponent {
  config;
  group: UntypedFormGroup;
}
