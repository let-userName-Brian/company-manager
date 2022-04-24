import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMetricsComponent } from './top-metrics.component';

describe('TopMetricsComponent', () => {
  let component: TopMetricsComponent;
  let fixture: ComponentFixture<TopMetricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopMetricsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
