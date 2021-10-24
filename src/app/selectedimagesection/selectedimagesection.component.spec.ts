import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedimagesectionComponent } from './selectedimagesection.component';

describe('SelectedimagesectionComponent', () => {
  let component: SelectedimagesectionComponent;
  let fixture: ComponentFixture<SelectedimagesectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedimagesectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedimagesectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
