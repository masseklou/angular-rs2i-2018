import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../../node_modules/@angular/router';
import { Item } from '../../../shared/interfaces/item';
import { CollectionService } from '../../../core/services/collection.service';
import { DateService } from '../../../core/services/date.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

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
    // item.deliveryDate = this.dateService.convertDateToIso(item);
    this.collectionService.add(item);
    this.router.navigate(['items/list']);

    // this.collectionService.add(item).subscribe((data) => {
    //   if (data) {
    //     msg
    //   }
    // });
  }
}
