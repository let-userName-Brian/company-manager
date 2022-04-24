import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomMetricsComponent } from './bottom-metrics.component';

describe('BottomMetricsComponent', () => {
  let component: BottomMetricsComponent;
  let fixture: ComponentFixture<BottomMetricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomMetricsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
