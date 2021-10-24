import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecttechniquesectionComponent } from './selecttechniquesection.component';

describe('SelecttechniquesectionComponent', () => {
  let component: SelecttechniquesectionComponent;
  let fixture: ComponentFixture<SelecttechniquesectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelecttechniquesectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecttechniquesectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
