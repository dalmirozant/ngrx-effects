import { createAction, props } from "@ngrx/store";
import { Rym } from "../../models/rym.interface";

export const loadRym = createAction('[Rym] Load Rym');

export const loadRymSuccess = createAction('[Rym] Load Rym Success', props<{rym: Rym[]}>());

export const loadRymFailure = createAction('[Rym] Load Rym Failure', props<{error: any}>())