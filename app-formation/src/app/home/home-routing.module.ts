import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './containers/home/home.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [
    // forRoot : route principale de l'application
    RouterModule.forChild(
      appRoutes
    )
  ]
})
export class HomeRoutingModule { }
