import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '../../../node_modules/@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { NavComponent } from './components/nav/nav.component';
import { ItemComponent } from './components/item/item.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { ToDeliverPipe } from './pipes/to-deliver.pipe';
import { StateDirective } from './directives/state.directive';
import { RouterModule } from '@angular/router';
import { FormComponent } from './components/form/form.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    FormsModule
  ],
  declarations: [NavComponent, ItemComponent, CapitalizePipe, ToDeliverPipe, StateDirective, FormComponent],
  exports: [NavComponent, ItemComponent, ToDeliverPipe, FormComponent]
})
export class SharedModule { }
