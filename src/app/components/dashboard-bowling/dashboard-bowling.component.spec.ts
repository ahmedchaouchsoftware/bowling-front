import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardBowlingComponent } from './dashboard-bowling.component';

describe('DashboardBowlingComponent', () => {
  let component: DashboardBowlingComponent;
  let fixture: ComponentFixture<DashboardBowlingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardBowlingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardBowlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
