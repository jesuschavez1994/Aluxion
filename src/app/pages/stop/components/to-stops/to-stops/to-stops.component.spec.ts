import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToStopsComponent } from './to-stops.component';

describe('ToStopsComponent', () => {
  let component: ToStopsComponent;
  let fixture: ComponentFixture<ToStopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToStopsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToStopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
