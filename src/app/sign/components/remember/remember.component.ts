import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-remember',
  templateUrl: './remember.component.html',
  styleUrls: ['./remember.component.scss']
})
export class RememberComponent {
  @Input() isOpen: boolean;
  @Output() showRememberPassoword  = new EventEmitter<boolean>();

  config = [
    {
      type: 'input',
      input_type: 'email',
      label: 'Email',
      name: 'email',
      placeholder: 'Enter your email'
    },
    {
      label: 'Submit',
      name: 'submit',
      type: 'button',
    },
  ];

  constructor(
    private authService: AuthService) { }

  closeRememberComponent() {
    this.showRememberPassoword.emit(false);
    this.isOpen = false;
  }

  formSubmitted(value) {
    console.log('remember', value);
    this.authService.resetPassword();
  }
}
