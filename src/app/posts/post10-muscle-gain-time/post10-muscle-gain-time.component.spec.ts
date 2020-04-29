import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Post10MuscleGainTimeComponent } from './post10-muscle-gain-time.component';

describe('Post10MuscleGainTimeComponent', () => {
  let component: Post10MuscleGainTimeComponent;
  let fixture: ComponentFixture<Post10MuscleGainTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Post10MuscleGainTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Post10MuscleGainTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
