import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/containers/home/home.component';
import { ListComponent } from './items/containers/list/list.component';
import { LoginComponent } from './login/containers/login/login.component';
import { DelivredComponent } from './items/containers/delivred/delivred.component';
import { PageNotFoundComponent } from './page-not-found/containers/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'list', component: ListComponent },
  { path: 'livrees', component: DelivredComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    // forRoot : route principale de l'application
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
