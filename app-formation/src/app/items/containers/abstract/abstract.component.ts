import { Component, OnInit, OnDestroy } from '@angular/core';
import { CollectionService } from '../../../core/services/collection.service';
import { Item } from '../../../shared/interfaces/item';
import { Observable, Subscription } from '../../../../../node_modules/rxjs';

@Component({
  selector: 'app-abstract',
  templateUrl: './abstract.component.html',
  styleUrls: ['./abstract.component.css']
})
export class AbstractComponent implements OnInit, OnDestroy {

  public collection: Observable<Item[]>;
  // public collection: Item[];
  // private sub: Subscription;
  constructor(
    protected collectionService: CollectionService
  ) { }

  ngOnInit() {
    this.collection = this.collectionService.collection;
    // this.sub = this.collectionService.collection.subscribe((data) => {
    //   this.collection = data;
    //   console.log('data');
    //   console.log('subscription');
    // });
  }

  ngOnDestroy() {
    // this.sub.unsubscribe();
    // console.log('test abstract unsubscribe');
  }
}
