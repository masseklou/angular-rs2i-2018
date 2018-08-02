import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../../../core/services/collection.service';
import { Router } from '../../../../../node_modules/@angular/router';
import { Item } from '../../../shared/interfaces/item';
import { DateService } from '../../../core/services/date.service';

@Component({
  selector: 'app-add-reactive',
  templateUrl: './add-reactive.component.html',
  styleUrls: ['./add-reactive.component.css']
})
export class AddReactiveComponent implements OnInit {

  constructor(
    private collectionService: CollectionService,
    private router: Router,
    private dateService: DateService,
  ) { }

  ngOnInit() {
  }

  public add(item: Item): void {
    // console.log(item);
    // const date = new Date(item.deliveryDate).toISOString();
    item.deliveryDate = this.dateService.convertDateToIso(item);
    this.collectionService.add(item);
    this.router.navigate(['items/list']);
  }
}
