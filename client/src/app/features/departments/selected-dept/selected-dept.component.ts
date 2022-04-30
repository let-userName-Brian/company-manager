import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { DepartmentService } from 'src/app/core/services/department.service';
import { getDepts } from '../store/dept.selector';

@Component({
  selector: 'app-selected-dept',
  templateUrl: './selected-dept.component.html',
  styleUrls: ['./selected-dept.component.sass']
})
export class SelectedDeptComponent implements OnInit {
  departmentNames$: Observable<any>
  selectedValue: string = 'd001'
  selectedDepartment: any[] = [];

  constructor(private store: Store, private deptService: DepartmentService) { }

  ngOnInit(): void {
   this.departmentNames$ = this.store.select(getDepts)
  };

  onChange() {
   this.deptService.getManagersById(this.selectedValue).subscribe(res => {
      this.selectedDepartment = res;
    });
  };
};
