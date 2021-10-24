import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechniqueNameComponent } from './technique-name.component';

describe('TechniqueNameComponent', () => {
  let component: TechniqueNameComponent;
  let fixture: ComponentFixture<TechniqueNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechniqueNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechniqueNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
