import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Rym, RymState } from './models/rym.interface';
import { Observable } from 'rxjs';
import { loadRym } from './store/actions/rym.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  rym$!: Observable<Rym[]>;
  error$!: Observable<any>;
  constructor(private store: Store<{rym: RymState}>){
    this.rym$ = store.select(state => state.rym.rym);
    this.error$ = store.select(state => state.rym.error);
  }

  ngOnInit(): void {
    this.store.dispatch(loadRym());
  }
}
