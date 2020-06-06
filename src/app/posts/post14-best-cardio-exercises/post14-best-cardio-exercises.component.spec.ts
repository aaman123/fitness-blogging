import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Post14BestCardioExercisesComponent } from './post14-best-cardio-exercises.component';

describe('Post14BestCardioExercisesComponent', () => {
  let component: Post14BestCardioExercisesComponent;
  let fixture: ComponentFixture<Post14BestCardioExercisesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Post14BestCardioExercisesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Post14BestCardioExercisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
