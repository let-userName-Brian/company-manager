import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  allNavbarActions,
  selectUserDetails,
  selectIsAdmin
} from '../../core/state/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  faUser: boolean = false;
  isAuthenticated$ = this.store.select(selectIsAdmin);
  user$ = this.store.select(selectUserDetails);

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  loginWithRedirect(): void {
    this.store.dispatch(allNavbarActions.loginFlowInitiated());
  }

  logout(): void {
    this.store.dispatch(allNavbarActions.logoutFlowInitiated());
  }
}
