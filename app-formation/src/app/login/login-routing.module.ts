import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './containers/login/login.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [
    // forRoot : route principale de l'application
    RouterModule.forChild(
      appRoutes
    )
  ]
})
export class LoginRoutingModule { }
