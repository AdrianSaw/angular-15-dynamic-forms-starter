import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizationGuard } from './core/guard/auth.guard';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { NoAuthorizationGuard } from './core/guard/noauth.guard';

const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule), canActivate: [AuthorizationGuard] },
  { path: 'sign', loadChildren: () => import('./sign/sign.module').then(m => m.SignModule), canActivate: [NoAuthorizationGuard] },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
