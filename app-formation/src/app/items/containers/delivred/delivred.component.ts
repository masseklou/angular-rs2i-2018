import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../../../core/services/collection.service';
import { Item } from '../../../shared/interfaces/item';
import { State } from '../../../shared/enums/state.enum';
import { AbstractComponent } from '../abstract/abstract.component';

@Component({
  selector: 'app-delivred',
  templateUrl: './delivred.component.html',
  styleUrls: ['./delivred.component.css']
})
export class DelivredComponent extends AbstractComponent implements OnInit {

  public state = State;
  constructor(collectionService: CollectionService) {
    super(collectionService);
    super.ngOnInit();
  }

  ngOnInit() {
    // console.log('test surcharge delivred');
  }

}
