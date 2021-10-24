import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectpicturesectionComponent } from './selectpicturesection.component';

describe('SelectpicturesectionComponent', () => {
  let component: SelectpicturesectionComponent;
  let fixture: ComponentFixture<SelectpicturesectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectpicturesectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectpicturesectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
