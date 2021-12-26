import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HyperphaseinstructionssectionComponent } from './hyperphaseinstructionssection.component';

describe('HyperphaseinstructionssectionComponent', () => {
  let component: HyperphaseinstructionssectionComponent;
  let fixture: ComponentFixture<HyperphaseinstructionssectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HyperphaseinstructionssectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HyperphaseinstructionssectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
