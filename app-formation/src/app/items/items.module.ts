import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { ListComponent } from './containers/list/list.component';
import { DelivredComponent } from './containers/delivred/delivred.component';
import { AbstractComponent } from './containers/abstract/abstract.component';
import { ItemsRoutingModule } from './items-routing.module';
import { AddComponent } from './containers/add/add.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ItemsRoutingModule
  ],
  declarations: [ListComponent, DelivredComponent, AbstractComponent, AddComponent],
  exports: [ListComponent, DelivredComponent]
})
export class ItemsModule { }

