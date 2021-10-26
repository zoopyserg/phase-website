import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTabLinkComponent } from './header-tab-link.component';

describe('HeaderTabLinkComponent', () => {
  let component: HeaderTabLinkComponent;
  let fixture: ComponentFixture<HeaderTabLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderTabLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderTabLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
