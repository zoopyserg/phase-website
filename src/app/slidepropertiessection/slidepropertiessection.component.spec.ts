import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidepropertiessectionComponent } from './slidepropertiessection.component';

describe('SlidepropertiessectionComponent', () => {
  let component: SlidepropertiessectionComponent;
  let fixture: ComponentFixture<SlidepropertiessectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlidepropertiessectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidepropertiessectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
