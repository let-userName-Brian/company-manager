import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { DepartmentManager } from 'src/app/core/interfaces/department.model';
import { DepartmentService } from 'src/app/core/services/department.service';
import { loadDeptManager } from '../store/dept.actions';
import { getDeptManager, getDepts } from '../store/dept.selector';

@Component({
  selector: 'app-selected-dept',
  templateUrl: './selected-dept.component.html',
  styleUrls: ['./selected-dept.component.sass']
})
export class SelectedDeptComponent implements OnInit {
  departmentNames$: Observable<any>
  selectedValue: string = 'd001'
  selectedDepartmentManager$: Observable<DepartmentManager | any> //TODO: the any allows the NgFor to work but doesnt work without it

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.departmentNames$ = this.store.select(getDepts)
  };

  onChange() {
    this.store.dispatch(loadDeptManager({ dept_no: this.selectedValue }))
    this.selectedDepartmentManager$ = this.store.select(getDeptManager)
  };
};
