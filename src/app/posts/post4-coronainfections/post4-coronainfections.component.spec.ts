import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Post4CoronainfectionsComponent } from './post4-coronainfections.component';

describe('Post4CoronainfectionsComponent', () => {
  let component: Post4CoronainfectionsComponent;
  let fixture: ComponentFixture<Post4CoronainfectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Post4CoronainfectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Post4CoronainfectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
