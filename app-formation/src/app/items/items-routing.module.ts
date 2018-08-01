import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './containers/list/list.component';
import { DelivredComponent } from './containers/delivred/delivred.component';


const appRoutes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'livrees', component: DelivredComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ]
})
export class ItemsRoutingModule { }
