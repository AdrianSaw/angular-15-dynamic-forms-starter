import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicFormInputTypeEnum } from 'src/app/dynamic-form/models/dynamic-form-input-type.enum';
import { DynamicFormTypesEnum } from 'src/app/dynamic-form/models/dynamic-form-types.enum';
import { DynamicFormConfigModel } from 'src/app/dynamic-form/models/dynamic-form-config.model';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  signForm: FormGroup;
  showRememberPassoword = false;

  config: DynamicFormConfigModel[] = [
    {
      type: DynamicFormTypesEnum.INPUT,
      input_type: DynamicFormInputTypeEnum.TEXT,
      label: 'Username',
      name: 'username',
      placeholder: 'Enter your username',
      validators: [Validators.required]
    },
    {
      type: DynamicFormTypesEnum.INPUT,
      input_type: DynamicFormInputTypeEnum.PASSWORD,
      label: 'Password',
      name: 'password',
      placeholder: 'Enter your password',
    },
    {
      type: DynamicFormTypesEnum.CHECKBOX,
      label: 'Remember me',
      name: 'remember',
    },
    {
      label: 'Log in',
      type: DynamicFormTypesEnum.BUTTON,
    },
  ];

  constructor(
    private authService: AuthService) { }

  ngOnInit() { }

  rememberPassword() {
    this.showRememberPassoword = true;
  }

  toggleRememberPasswordComponent(evt) {
    this.showRememberPassoword = evt;
  }

  formSubmitted(value) {
    console.log(value);
    this.authService.signin();
  }
}
