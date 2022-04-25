import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Department } from 'src/app/core/interfaces/department.model';
import { getDepts } from '../../departments/store/dept.selector';

@Component({
  selector: 'app-top-metrics',
  templateUrl: './top-metrics.component.html',
  styleUrls: ['./top-metrics.component.sass']
})
export class TopMetricsComponent implements OnInit {
  departments: Department[] = []
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.select(getDepts).subscribe(dept => {
      this.departments = dept
    });
  };
};
