import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Post11FatLossComponent } from './post11-fat-loss.component';

describe('Post11FatLossComponent', () => {
  let component: Post11FatLossComponent;
  let fixture: ComponentFixture<Post11FatLossComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Post11FatLossComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Post11FatLossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
