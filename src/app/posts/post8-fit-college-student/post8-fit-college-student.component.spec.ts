import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Post8FitCollegeStudentComponent } from './post8-fit-college-student.component';

describe('Post8FitCollegeStudentComponent', () => {
  let component: Post8FitCollegeStudentComponent;
  let fixture: ComponentFixture<Post8FitCollegeStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Post8FitCollegeStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Post8FitCollegeStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
