import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getEmployeesCount } from './store/employees.actions';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.sass']
})
export class EmployeesComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

}
