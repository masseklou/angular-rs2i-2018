import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { ItemsRoutingModule } from './items-routing.module';
import { SharedModule } from '../shared/shared.module';

import { AbstractComponent } from './containers/abstract/abstract.component';
import { AddComponent } from './containers/add/add.component';
import { DelivredComponent } from './containers/delivred/delivred.component';
import { ListComponent } from './containers/list/list.component';
import { AddReactiveComponent } from './containers/add-reactive/add-reactive.component';
import { EditComponent } from './containers/edit/edit.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ItemsRoutingModule
  ],
  declarations: [ListComponent, DelivredComponent, AbstractComponent, AddComponent, AddReactiveComponent, EditComponent],
  exports: [ListComponent, DelivredComponent]
})
export class ItemsModule { }

