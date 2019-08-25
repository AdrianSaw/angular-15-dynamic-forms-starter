import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  config = [
    {
      type: 'input',
      input_type: 'text',
      label: 'Username',
      name: 'username',
      placeholder: 'Enter your username'
    },
    {
      type: 'input',
      input_type: 'text',
      label: 'Email',
      name: 'email',
      placeholder: 'Enter your email'
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
      label: 'Agree to terms',
      name: 'terms',
    },
    {
      label: 'Register',
      type: 'button',
    },
  ];

  constructor(private authService: AuthService) { }

  formSubmitted(value) {
    console.log(value);
    this.authService.signup();
  }
}
