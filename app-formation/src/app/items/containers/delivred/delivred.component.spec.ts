import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelivredComponent } from './delivred.component';

describe('DelivredComponent', () => {
  let component: DelivredComponent;
  let fixture: ComponentFixture<DelivredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelivredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelivredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
