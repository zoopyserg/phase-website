import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsectionComponent } from './chartsection.component';

describe('ChartsectionComponent', () => {
  let component: ChartsectionComponent;
  let fixture: ComponentFixture<ChartsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartsectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
