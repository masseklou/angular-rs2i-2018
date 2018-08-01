import { Injectable } from '@angular/core';
import { Item } from '../../shared/interfaces/item';
import { COLLECTION } from '../collection';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  private _collection: Item[];
  constructor() {
    this.collection = COLLECTION;
   }

  /**
   * get collection
   */
  get collection(): Item[] {
    return this._collection;
  }

  /**
   * set collection
   */
  set collection(col: Item[]) {
    this._collection = col;
  }

   /**
   * get 1 item from collection
   */


   /**
   * add 1 item in collection
   */
  public add(item: Item): void {
    // update + catch pour les erreurs
    this.collection.push(item);
  }

   /**
   * update 1 item in collection
   */
  public update(item: Item): void {
    // update + catch pour les erreurs
  }

   /**
   * delete 1 item in collection
   */
  public delete(item: Item): void {
    // update + catch pour les erreurs
  }

}
