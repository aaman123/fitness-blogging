import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Post12BestHomeExercisesComponent } from './post12-best-home-exercises.component';

describe('Post12BestHomeExercisesComponent', () => {
  let component: Post12BestHomeExercisesComponent;
  let fixture: ComponentFixture<Post12BestHomeExercisesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Post12BestHomeExercisesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Post12BestHomeExercisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
