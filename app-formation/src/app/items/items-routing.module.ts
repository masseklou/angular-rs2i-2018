import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddComponent } from './containers/add/add.component';
import { DelivredComponent } from './containers/delivred/delivred.component';
import { ListComponent } from './containers/list/list.component';
import { AddReactiveComponent } from './containers/add-reactive/add-reactive.component';
import { EditComponent } from './containers/edit/edit.component';
import { AuthGuardGuard } from '../core/services/auth-guard.guard';
import { DetailResolveService } from '../core/services/detail-resolve.service';


const appRoutes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'livrees', component: DelivredComponent },
  { path: 'add', component: AddComponent },
  {
    path: 'add-reactive',
    component: AddReactiveComponent,
    canActivate: [AuthGuardGuard]
  },
  { path: 'edit/:id',
    component: EditComponent,
    resolve: { item: DetailResolveService} },
];

@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ]
})
export class ItemsRoutingModule { }
