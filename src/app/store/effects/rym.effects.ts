import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { RymService } from "../../services/rym.service";
import { loadRym, loadRymFailure, loadRymSuccess } from "../actions/rym.actions";
import { catchError, map, mergeMap, of } from "rxjs";

@Injectable()
export class RymEffects {

     loadRym$ = createEffect(() => this.actions$.pipe(
        ofType(loadRym),
        mergeMap(() => this.rymService.getRym().pipe(
            map(rym => loadRymSuccess({rym})),
            catchError(error => of(loadRymFailure({error})))
        ))
     ))

     constructor(private actions$: Actions,private rymService: RymService) {}
}