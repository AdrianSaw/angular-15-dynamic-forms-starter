import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './pages/signin/signin.component';
import { SignRoutingModule } from './sign-routing.module';
import { SharedModule } from '../shared/shared.module';
import { SignupComponent } from './pages/signup/signup.component';
import { RememberComponent } from './components/remember/remember.component';



@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent,
    RememberComponent
  ],
  imports: [
    CommonModule,
    SignRoutingModule,
    SharedModule
  ]
})
export class SignModule { }
