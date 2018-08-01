import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './components/nav/nav.component';
import { ItemComponent } from './components/item/item.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { ToDeliverPipe } from './pipes/to-deliver.pipe';
import { StateDirective } from './directives/state.directive';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule
  ],
  declarations: [NavComponent, ItemComponent, CapitalizePipe, ToDeliverPipe, StateDirective],
  exports: [NavComponent, ItemComponent, ToDeliverPipe]
})
export class SharedModule { }
