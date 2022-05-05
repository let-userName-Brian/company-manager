import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getEmployeesCount } from './store/employees.actions';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.sass']
})
export class EmployeesComponent {
  constructor(private store: Store) { }
}
