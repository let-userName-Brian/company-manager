import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Department } from 'src/app/core/interfaces/department.model';
import { getDepts } from '../../departments/store/dept.selector';
import { getEmps } from '../../employees/store/employees.selector';

@Component({
  selector: 'app-top-metrics',
  templateUrl: './top-metrics.component.html',
  styleUrls: ['./top-metrics.component.sass']
})
export class TopMetricsComponent implements OnInit {
  departments$: Observable<Department[]>
  empCount$: Observable<number>
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.departments$ = this.store.select(getDepts)
    this.empCount$ = this.store.select(getEmps)
  };
};
