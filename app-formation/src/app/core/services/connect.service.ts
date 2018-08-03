import { Injectable } from '@angular/core';
import { Identifiants } from '../../shared/interfaces/identifiants';
import { Observable, BehaviorSubject } from '../../../../node_modules/rxjs';
import {
  AngularFirestoreCollection,
  AngularFirestore
} from '../../../../node_modules/angularfire2/firestore';
import { Router } from '../../../../node_modules/@angular/router';
import { Users } from '../../shared/interfaces/users';

@Injectable({
  providedIn: 'root'
})
export class ConnectService {
  private userCollection: AngularFirestoreCollection<Identifiants>;
  private users$: Observable<Identifiants[]>;
  public message$: BehaviorSubject<string> = new BehaviorSubject(null);
  public connect$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public user: Identifiants;
  constructor(
    private afs: AngularFirestore,
    private router: Router,
  ) {}

  public checkIdentite(ident: Identifiants) { // : Observable<Identifiants[]>
    console.log('checkIdentite : ' + ident.email, ident.password);
    this.userCollection = this.afs.collection<Identifiants>(
      'users', ref => {
      return ref
        .where('email', '==', ident.email)
        .where('password', '==', ident.password);
    });

    this.users$ = this.userCollection.valueChanges();

    this.users$.subscribe((data) => {
      // console.log('data 1' + data);
      if (data.length > 0) {
        console.log('data 2' + data.toString);
        this.user = data[0];
        this.connect$.next(true);
        this.router.navigate(['/home']);
      } else {
        this.message$.next('tu t\'es trompé !');
      }
    });
  }

}
