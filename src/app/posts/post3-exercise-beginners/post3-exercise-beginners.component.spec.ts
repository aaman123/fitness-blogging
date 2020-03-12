import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Post3ExerciseBeginnersComponent } from './post3-exercise-beginners.component';

describe('Post3ExerciseBeginnersComponent', () => {
  let component: Post3ExerciseBeginnersComponent;
  let fixture: ComponentFixture<Post3ExerciseBeginnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Post3ExerciseBeginnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Post3ExerciseBeginnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
