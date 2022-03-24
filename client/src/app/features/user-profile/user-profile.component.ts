import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectUserDetails } from 'src/app/core/state/user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.sass']
})
export class UserProfileComponent implements OnInit {
  user$ = this.store.select(selectUserDetails)
  constructor(private store: Store) { }

  ngOnInit(): void {
  }

}
