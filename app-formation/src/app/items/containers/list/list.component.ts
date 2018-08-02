import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../../../core/services/collection.service';
import { AbstractComponent } from '../abstract/abstract.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent extends AbstractComponent implements OnInit {

  // public collection: Item[];
  constructor(collectionService: CollectionService) {
    super(collectionService);
    super.ngOnInit();
  }

  ngOnInit() {
    // console.log('test surcharge delivred');
    // this.collection = this.collectionService.collection;
    /*console.log(this.collection);*/
  }

}
