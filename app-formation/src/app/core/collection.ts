import { Item } from '../shared/interfaces/item';
import { State } from '../shared/enums/state.enum';


export const COLLECTION: Item[] = [
  {
    id: '1234',
    name: 'marouane',
    reference: '1212',
    deliveryDate: '2018-07-28T22:00:00.000Z',
    state: State.ALIVRER
  },
  {
    id: '11111',
    name: 'tata',
    reference: '5656',
    deliveryDate: '2018-08-02T22:00:00.000Z',
    state: State.ENCOURS
  },
  {
    id: '22222',
    name: 'toto',
    reference: '3434',
    deliveryDate: '2018-08-20T12:00:00.000Z',
    state: State.LIVREE
  }
];
