import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Department } from 'src/app/core/interfaces/department.model';
import { getDeptState } from './store/dept.selector';
import { loadDepartments } from './store/dept.actions';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.sass']
})
export class DepartmentsComponent implements OnInit {
  departments$: Department = {
    dept_no: '',
    dept_name: ''
  };
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(loadDepartments());
    this.store.select(getDeptState).subscribe((state) => {
      console.log("state", state);
      // return this.departments$ = {
      //   dept_no: state.dept_no,
      //   dept_name: state.dept_name
      // };
    });
  }

}
