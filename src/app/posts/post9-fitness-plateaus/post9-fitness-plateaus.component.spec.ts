import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Post9FitnessPlateausComponent } from './post9-fitness-plateaus.component';

describe('Post9FitnessPlateausComponent', () => {
  let component: Post9FitnessPlateausComponent;
  let fixture: ComponentFixture<Post9FitnessPlateausComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Post9FitnessPlateausComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Post9FitnessPlateausComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
