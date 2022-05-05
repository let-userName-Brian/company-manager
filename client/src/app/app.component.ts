import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadDepartments } from './features/departments/store/dept.actions';
import { getEmployeesCount } from './features/employees/store/employees.actions';
import { getManagerCount } from './features/managers/store/managers.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
    //initialize the store for the metrics page to load while on the login page
    this.store.dispatch(loadDepartments());
    this.store.dispatch(getEmployeesCount());
    this.store.dispatch(getManagerCount());
  };
};
