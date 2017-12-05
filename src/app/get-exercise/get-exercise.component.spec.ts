import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetExerciseComponent } from './get-exercise.component';

describe('GetExerciseComponent', () => {
  let component: GetExerciseComponent;
  let fixture: ComponentFixture<GetExerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetExerciseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
