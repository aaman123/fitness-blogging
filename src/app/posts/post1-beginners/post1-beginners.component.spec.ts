import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Post1BeginnersComponent } from './post1-beginners.component';

describe('Post1BeginnersComponent', () => {
  let component: Post1BeginnersComponent;
  let fixture: ComponentFixture<Post1BeginnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Post1BeginnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Post1BeginnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
