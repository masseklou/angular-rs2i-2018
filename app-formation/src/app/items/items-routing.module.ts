import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddComponent } from './containers/add/add.component';
import { DelivredComponent } from './containers/delivred/delivred.component';
import { ListComponent } from './containers/list/list.component';
import { AddReactiveComponent } from './containers/add-reactive/add-reactive.component';


const appRoutes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'livrees', component: DelivredComponent },
  { path: 'add', component: AddComponent },
  { path: 'add-reactive', component: AddReactiveComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ]
})
export class ItemsRoutingModule { }
