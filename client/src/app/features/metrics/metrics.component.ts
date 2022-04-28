import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadDepartments } from '../departments/store/dept.actions';
import { getEmployeesCount } from '../employees/store/employees.actions';
import { getManagerCount } from '../managers/store/managers.actions';
@Component({
  selector: 'app-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.sass']
})
export class MetricsComponent implements OnInit {
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(loadDepartments());
    this.store.dispatch(getEmployeesCount());
    this.store.dispatch(getManagerCount());
  };
};
