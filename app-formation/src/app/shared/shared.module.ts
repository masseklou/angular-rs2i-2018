import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '../../../node_modules/@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// External libraries
import { IconsModule } from '../icons/icons.module';

import { CapitalizePipe } from './pipes/capitalize.pipe';
import { FormComponent } from './components/form/form.component';
import { ItemComponent } from './components/item/item.component';
import { NavComponent } from './components/nav/nav.component';
import { ToDeliverPipe } from './pipes/to-deliver.pipe';
import { StateDirective } from './directives/state.directive';
import { RouterModule } from '@angular/router';
import { FormReactiveComponent } from './components/form-reactive/form-reactive.component';
import { FormConnectComponent } from './components/form-connect/form-connect.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    FormsModule,
    IconsModule,
    ReactiveFormsModule
  ],
  // tslint:disable-next-line:max-line-length
  declarations: [NavComponent, ItemComponent, CapitalizePipe, ToDeliverPipe, StateDirective, FormComponent, FormReactiveComponent, FormConnectComponent],
  exports: [NavComponent, ItemComponent, ToDeliverPipe, FormComponent, FormReactiveComponent, FormConnectComponent]
})
export class SharedModule { }
