import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedDeptComponent } from './selected-dept.component';

describe('SelectedDeptComponent', () => {
  let component: SelectedDeptComponent;
  let fixture: ComponentFixture<SelectedDeptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedDeptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedDeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
