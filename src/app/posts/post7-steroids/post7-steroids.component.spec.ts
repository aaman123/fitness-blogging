import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Post7SteroidsComponent } from './post7-steroids.component';

describe('Post7SteroidsComponent', () => {
  let component: Post7SteroidsComponent;
  let fixture: ComponentFixture<Post7SteroidsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Post7SteroidsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Post7SteroidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
