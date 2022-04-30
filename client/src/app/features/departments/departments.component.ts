import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Department } from 'src/app/core/interfaces/department.model';
import { loadDepartments } from './store/dept.actions';
import { getDepts } from './store/dept.selector';


@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.sass']
})
export class DepartmentsComponent implements OnInit {
  departments$: Observable<any>
  displayedColumns: string[] = ['Department Number', 'Department Name', 'Department Status'];
  constructor(private store: Store<{ department: Department }>) { };

  ngOnInit(): void {
    this.departments$ = this.store.select(getDepts);
  };
};
