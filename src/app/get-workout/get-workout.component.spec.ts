import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetWorkoutComponent } from './get-workout.component';

describe('GetWorkoutComponent', () => {
  let component: GetWorkoutComponent;
  let fixture: ComponentFixture<GetWorkoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetWorkoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetWorkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
