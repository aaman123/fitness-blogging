import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Post5BalancedDietComponent } from './post5-balanced-diet.component';

describe('Post5BalancedDietComponent', () => {
  let component: Post5BalancedDietComponent;
  let fixture: ComponentFixture<Post5BalancedDietComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Post5BalancedDietComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Post5BalancedDietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
