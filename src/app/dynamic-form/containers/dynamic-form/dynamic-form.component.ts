import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { UntypedFormGroup, UntypedFormBuilder, UntypedFormControl } from "@angular/forms";

@Component({
  selector: "dynamic-form",
  styleUrls: ["dynamic-form.component.scss"],
  template: `
    <form
      class="dynamic-form"
      [formGroup]="form"
      (ngSubmit)="handleSubmit($event)">

      <ng-container
        *ngFor="let field of config"
        dynamicField
        [config]="field"
        [group]="form">
      </ng-container>

    </form>
  `
})
export class DynamicFormComponent implements OnInit {
  @Input() config: any[] = [];
  @Output() submitted = new EventEmitter();

  form: UntypedFormGroup;

  get changes() { return this.form.valueChanges; }
  get valid() { return this.form.valid; }
  get value() { return this.form.value; }

  constructor(private fb: UntypedFormBuilder) {}

  ngOnInit() {
    this.form = this.createGroup();
  }

  createGroup() {
    const group = this.fb.group({});
    this.config.forEach(field => {
      if (field.name) {
        group.addControl(field.name, new UntypedFormControl("", field.validators));
      }
    });
    return group;
  }

  handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    this.submitted.emit(this.value)
  }
}
