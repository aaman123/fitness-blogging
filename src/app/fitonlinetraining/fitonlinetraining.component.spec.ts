import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FitonlinetrainingComponent } from './fitonlinetraining.component';

describe('FitonlinetrainingComponent', () => {
  let component: FitonlinetrainingComponent;
  let fixture: ComponentFixture<FitonlinetrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FitonlinetrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FitonlinetrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
