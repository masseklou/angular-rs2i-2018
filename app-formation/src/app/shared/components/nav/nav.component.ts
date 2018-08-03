import { Component, OnChanges } from '@angular/core';
import { ConnectService } from '../../../core/services/connect.service';
import { Router } from '../../../../../node_modules/@angular/router';
import { Identifiants } from '../../interfaces/identifiants';
import { BehaviorSubject } from '../../../../../node_modules/rxjs';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnChanges {
  public title = 'My supper app';
  public isCollapsed = true;
  public connect$: BehaviorSubject<boolean>;
  public user: Identifiants;
  constructor(
    private connectService: ConnectService,
    private router: Router,
  ) { }

  ngOnChanges() {
    this.connect$ = this.connectService.connect$;
    this.user = this.connectService.user;
    console.log('connect value ' + this.connect$.value);
  }

  public logout(): void {
    this.connectService.connect$.next(false);
    this.router.navigate(['login']);
  }

}
