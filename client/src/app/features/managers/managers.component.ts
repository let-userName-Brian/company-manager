import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getManagerCount } from './store/managers.actions';

@Component({
  selector: 'app-managers',
  templateUrl: './managers.component.html',
  styleUrls: ['./managers.component.sass']
})
export class ManagersComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(getManagerCount());
  };

};
