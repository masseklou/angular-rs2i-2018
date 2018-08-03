import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '../../../../../node_modules/@angular/forms';
import { Identifiants } from '../../interfaces/identifiants';
import {faEye} from '@fortawesome/free-solid-svg-icons';
import { ConnectService } from '../../../core/services/connect.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-form-connect',
  templateUrl: './form-connect.component.html',
  styleUrls: ['./form-connect.component.css']
})
export class FormConnectComponent implements OnInit {

  public form: FormGroup;
  public faEye = faEye;
  public type: string;
  public show: boolean;
  public msg: BehaviorSubject<string>;
  @Output() identifiants: EventEmitter<Identifiants> = new EventEmitter();
  constructor(
    private fb: FormBuilder,
    private connectionService: ConnectService
  ) { }

  ngOnInit() {
    this.createForm();
    this.show = false;
    this.type = 'password';
    this.msg = this.connectionService.message$;
  }

  private createForm(): void {
    this.form = this.fb.group({
      email: [
        '',
        Validators.compose([Validators.required, Validators.email])
      ],
      password: [
        '',
        Validators.compose([Validators.required, Validators.minLength(6)])
      ],
    });
  }

  public process() {
    // console.log(this.form.value);
    this.identifiants.emit(this.form.value);
    this.form.reset();
  }

  public isError(fieldName: string): boolean {
    return this.form.get(fieldName).invalid && this.form.get(fieldName).touched;
  }

  public toggle() {
    this.show = !this.show;
    if (this.show) {
      this.type = 'text';
    } else {
      this.type = 'password';
    }
  }

}
