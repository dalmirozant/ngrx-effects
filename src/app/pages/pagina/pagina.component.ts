import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Rym, RymState } from '../../models/rym.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrl: './pagina.component.scss',
})
export class PaginaComponent {
  rym$!: Observable<Rym[]>;
  currentPage$!: Observable<number>;
  constructor(private store: Store<{ rym: RymState }>) {
    this.rym$ = store.select(({ rym }) => rym.rym);
    this.currentPage$ = store.select(({ rym }) => rym.currentPage);
  }
}
