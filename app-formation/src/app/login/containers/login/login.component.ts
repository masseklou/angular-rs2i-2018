import { Component, OnInit, Input } from '@angular/core';
import { Identifiants } from '../../../shared/interfaces/identifiants';
import { ConnectService } from '../../../core/services/connect.service';
import { Observable } from '../../../../../node_modules/rxjs/internal/Observable';
import { BehaviorSubject } from '../../../../../node_modules/rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private identifiants: Observable<Identifiants[]>;
  constructor(
    private connectService: ConnectService
  ) { }

  ngOnInit() {
    // this.connectService.message.subscribe((data) => {
    //   this.msg = data;
    //   console.log('sub');
    // });
  }

  public connect(identite: Identifiants): void {
    console.log('ident = ' + identite.email, identite.password);

    // this.connectService.checkIdentite(identite);
    this.connectService.checkIdentite(identite);

    // .subscribe(data => {
    //   console.log(data);
    // });
  }

}
