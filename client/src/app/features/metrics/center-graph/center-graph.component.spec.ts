import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterGraphComponent } from './center-graph.component';

describe('CenterGraphComponent', () => {
  let component: CenterGraphComponent;
  let fixture: ComponentFixture<CenterGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenterGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
