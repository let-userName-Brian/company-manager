import { Component, OnInit } from '@angular/core';
import { getTotalSalaryCount } from './store/misc.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-misc',
  templateUrl: './misc.component.html',
  styleUrls: ['./misc.component.sass']
})
export class MiscComponent implements OnInit {
  constructor(private store: Store) { }

  //calls the DB to set the salary count
  ngOnInit(){
    this.store.dispatch(getTotalSalaryCount())
  };
};
