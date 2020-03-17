import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Newsletter2Component } from './newsletter2.component';

describe('Newsletter2Component', () => {
  let component: Newsletter2Component;
  let fixture: ComponentFixture<Newsletter2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Newsletter2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Newsletter2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
