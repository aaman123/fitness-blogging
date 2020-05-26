import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BMICalculatorComponent } from './bmi-calculator.component';

describe('BMICalculatorComponent', () => {
  let component: BMICalculatorComponent;
  let fixture: ComponentFixture<BMICalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BMICalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BMICalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
