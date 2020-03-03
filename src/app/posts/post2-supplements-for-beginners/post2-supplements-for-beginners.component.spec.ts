import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Post2SupplementsForBeginnersComponent } from './post2-supplements-for-beginners.component';

describe('Post2SupplementsForBeginnersComponent', () => {
  let component: Post2SupplementsForBeginnersComponent;
  let fixture: ComponentFixture<Post2SupplementsForBeginnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Post2SupplementsForBeginnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Post2SupplementsForBeginnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
