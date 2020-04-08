import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalorieTrackerComponent } from './calorie-tracker.component';

describe('CalorieTrackerComponent', () => {
  let component: CalorieTrackerComponent;
  let fixture: ComponentFixture<CalorieTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalorieTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalorieTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
