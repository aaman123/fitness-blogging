import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Post13ElleahMorganComponent } from './post13-elleah-morgan.component';

describe('Post13ElleahMorganComponent', () => {
  let component: Post13ElleahMorganComponent;
  let fixture: ComponentFixture<Post13ElleahMorganComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Post13ElleahMorganComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Post13ElleahMorganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
