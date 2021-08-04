import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameStateComponent } from './name-state.component';

describe('NameStateComponent', () => {
  let component: NameStateComponent;
  let fixture: ComponentFixture<NameStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NameStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NameStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
