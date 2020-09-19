import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Post15PilatesComponent } from './post15-pilates.component';

describe('Post15PilatesComponent', () => {
  let component: Post15PilatesComponent;
  let fixture: ComponentFixture<Post15PilatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Post15PilatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Post15PilatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
