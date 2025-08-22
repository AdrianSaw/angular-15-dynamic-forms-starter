import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  signForm: UntypedFormGroup;
  showRememberPassoword = false;

  config = [
    {
      type: 'input',
      input_type: 'text',
      label: 'Username',
      name: 'username',
      placeholder: 'Enter your username',
      validators: [Validators.required]
    },
    {
      type: 'input',
      input_type: 'password',
      label: 'Password',
      name: 'password',
      placeholder: 'Enter your password',
    },
    {
      type: 'checkbox',
      label: 'Remember me',
      name: 'remember',
    },
    {
      label: 'Log in',
      type: 'button',
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
