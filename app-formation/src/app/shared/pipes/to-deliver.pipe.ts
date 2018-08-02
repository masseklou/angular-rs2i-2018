import { Pipe, PipeTransform } from '@angular/core';
import { State } from '../enums/state.enum';

@Pipe({
  name: 'toDeliver'
})
export class ToDeliverPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    // console.log(value);
    if (value) {
      if (args) {
        return value.filter(myItem => myItem.state === State.LIVREE);
      }

      return value.filter(myItem => myItem.state !== State.LIVREE);
      /*return value ? value.filter(myItem => myItem.state !== State.LIVREE) : [];*/
    }
  }

}
