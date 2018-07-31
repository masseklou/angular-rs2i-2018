import { Directive, Input, HostBinding, OnChanges } from '@angular/core';
import { State } from '../enums/state.enum';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {

  @Input() appState: State;
  @HostBinding('class') nomClass: string;
  constructor() {
  }

  ngOnChanges() {

    // console.log(this.appState);

    this.nomClass = this.formatClass(this.appState);
  }

  private formatClass(statut: State): string {
    // console.log('state-' + ((statut.normalize('NFD').replace(/[\u0300-\u036f]/g, '')).replace(/ /g, '')).toLowerCase());
    // return 'state-' + ((statut.normalize('NFD').replace(/[\u0300-\u036f]/g, '')).replace(/ /g, '')).toLowerCase();

    return `state-${statut.normalize('NFD')
      .replace(/[\u0300-\u036f\s]/g, '')
      .toLowerCase()
    }`;
  }

  // A livrer -> state-alivrer
  // En cours -> state-encours
  // Livree -> state-livree

}
