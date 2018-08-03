import { Component, OnInit } from '@angular/core';
import { Item } from '../../../shared/interfaces/item';
import { CollectionService } from '../../../core/services/collection.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public item: Item;
  constructor(
    private collectionService: CollectionService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    // console.log(this.activatedRoute);
    // console.log(this.router);
    this.activatedRoute.data.subscribe((data) => {
      this.item = data['item'];
      console.log(this.item);
    });
  }

  public update(item: Item): void {
    this.collectionService.update(item);
  }

}
