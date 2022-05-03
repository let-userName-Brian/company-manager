import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getTotalSalaryCount } from './store/misc.actions';

@Component({
  selector: 'app-misc',
  templateUrl: './misc.component.html',
  styleUrls: ['./misc.component.sass']
})
export class MiscComponent implements OnInit {
  constructor(private store: Store) { }

  ngOnInit(){
    this.store.dispatch(getTotalSalaryCount())
  }

}
