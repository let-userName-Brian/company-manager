import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getDepts } from '../store/dept.selector';

@Component({
  selector: 'app-selected-dept',
  templateUrl: './selected-dept.component.html',
  styleUrls: ['./selected-dept.component.sass']
})
export class SelectedDeptComponent implements OnInit {
  departmentNames$: Observable<any>
  selectedValue: string;
  constructor(private store: Store) { }

  ngOnInit(): void {
   // this.departmentNames$ = this.store.select(getDepts)
  };
};
