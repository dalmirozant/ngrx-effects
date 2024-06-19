import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Rym, RymState } from '../../models/rym.interface';
import { Observable } from 'rxjs';
import { loadRym } from '../../store/actions/rym.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  rym$!: Observable<Rym[]>;
  error$!: Observable<any>;
  currentPage$!: Observable<number>;
  constructor(private store: Store<{ rym: RymState }>) {
    this.rym$ = store.select((state) => state.rym.rym);
    this.error$ = store.select((state) => state.rym.error);
    this.currentPage$ = store.select((state) => state.rym.currentPage);
  }

  ngOnInit(): void {
    this.setLoadRym();
  }

  setLoadRym() {
    this.currentPage$.subscribe((page) => {
      this.store.dispatch(loadRym({ page }));
    });
  }

  onPageChange(page: number) {
    this.store.dispatch(loadRym({ page }));
  }
}
