import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {interval, Subscription, Observable} from 'rxjs';
import {increase, decrease, reset} from '../counter.actions';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent {

  subscription: Subscription = new Subscription();
  countIncr$: Observable<number>
  countDecr$: Observable<number>

  constructor(private store: Store<{ countIncr: number, counterDecr: number }>) {
    this.countIncr$ = store.select('countIncr');
    this.countDecr$ = store.select('counterDecr');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  increase() {
    this.store.dispatch(increase());
  }

  decrease() {
    this.store.dispatch(decrease());
  }

  reset() {
    this.store.dispatch(reset());
  }

  change() {
    this.increase();
    this.decrease();
    this.decrease();
  }

  start() {
    const source = interval(1000);
    this.subscription = source.subscribe(() => this.change());
  }

  stop() {
    this.subscription.unsubscribe();
  }

}
