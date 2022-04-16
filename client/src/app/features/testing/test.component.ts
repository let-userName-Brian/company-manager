import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { cunstomIncrement, decrement, increment, reset } from 'src/app/core/state/counter/counter.actions';
import { CounterState } from 'src/app/core/state/counter/counter.state';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.sass']
})
export class TestComponent implements OnInit {
  counter$!: Observable<{ counter: number }>; //using an observable vs subscription and setting it in the onInit
  value: number = 0;
  constructor(private store: Store<{ counter: CounterState }>) { }

  ngOnInit(): void {
    this.counter$ = this.store.select('counter');
  }

  increment() {
    this.store.dispatch(increment());
  };

  decrement() {
    this.store.dispatch(decrement());
  };

  reset() {
    this.store.dispatch(reset());
  };

  setCounter() {
    this.store.dispatch(cunstomIncrement({ value: +this.value }));
  }
};
