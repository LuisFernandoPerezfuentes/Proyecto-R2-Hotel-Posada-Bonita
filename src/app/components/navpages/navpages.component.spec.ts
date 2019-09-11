import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavpagesComponent } from './navpages.component';

describe('NavpagesComponent', () => {
  let component: NavpagesComponent;
  let fixture: ComponentFixture<NavpagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavpagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavpagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
