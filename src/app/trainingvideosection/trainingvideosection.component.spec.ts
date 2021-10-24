import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingvideosectionComponent } from './trainingvideosection.component';

describe('TrainingvideosectionComponent', () => {
  let component: TrainingvideosectionComponent;
  let fixture: ComponentFixture<TrainingvideosectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingvideosectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingvideosectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
