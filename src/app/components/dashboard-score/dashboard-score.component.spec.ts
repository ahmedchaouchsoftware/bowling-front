import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordScoreComponent } from './dashbord-score.component';

describe('DashbordScoreComponent', () => {
  let component: DashbordScoreComponent;
  let fixture: ComponentFixture<DashbordScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashbordScoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashbordScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
