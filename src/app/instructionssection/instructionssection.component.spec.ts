import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructionssectionComponent } from './instructionssection.component';

describe('TrainingvideosectionComponent', () => {
  let component: InstructionssectionComponent;
  let fixture: ComponentFixture<InstructionssectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructionssectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructionssectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
