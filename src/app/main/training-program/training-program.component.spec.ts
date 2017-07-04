import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingProgramComponent } from './training-program.component';

describe('TrainingProgramComponent', () => {
  let component: TrainingProgramComponent;
  let fixture: ComponentFixture<TrainingProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingProgramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
