import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { RymService } from '../../services/rym.service';
import {
  loadRym,
  loadRymFailure,
  loadRymSuccess,
} from '../actions/rym.actions';
import { catchError, map, mergeMap, of, withLatestFrom } from 'rxjs';
import { Store } from '@ngrx/store';
import { RymState } from '../../models/rym.interface';

@Injectable()
export class RymEffects {
  loadRym$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadRym),
      withLatestFrom(this.store.select((state) => state.rym.currentPage)),
      mergeMap(([action, currentPage]) =>
        this.rymService.getRym(currentPage).pipe(
          map((rym) => loadRymSuccess({ rym })),
          catchError((error) => of(loadRymFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private rymService: RymService,
    private store: Store<{ rym: RymState }>
  ) {}
}
