import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Post6BroscienceBustedComponent } from './post6-broscience-busted.component';

describe('Post6BroscienceBustedComponent', () => {
  let component: Post6BroscienceBustedComponent;
  let fixture: ComponentFixture<Post6BroscienceBustedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Post6BroscienceBustedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Post6BroscienceBustedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
