import { Component, OnInit } from '@angular/core';
import { SpinnerService } from './shared/services/spinner/spinner.service';
import { AuthService } from './core/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  spinnerActive: boolean;
  auth: boolean;

  constructor(
    private spinnerService: SpinnerService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.spinnerService.active.subscribe((active: boolean) => {
      this.spinnerActive = active;
    });

    this.authService.auth.subscribe(valid => {
      console.log(valid);
      this.auth = valid;
    });
  }
}
