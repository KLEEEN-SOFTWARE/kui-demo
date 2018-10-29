import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetHealthCardComponent } from './net-health-card.component';

describe('NetHealthCardComponent', () => {
  let component: NetHealthCardComponent;
  let fixture: ComponentFixture<NetHealthCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetHealthCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetHealthCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
