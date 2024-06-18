import { createReducer, on } from '@ngrx/store';
import { RymState } from '../../models/rym.interface';
import {
  loadRym,
  loadRymFailure,
  loadRymSuccess,
} from '../actions/rym.actions';

export const initialState: RymState = {
  rym: [],
  currentPage: 1,
  error: null,
};

export const rymReducer = createReducer(
  initialState,
  on(loadRym, (state, { page }) => ({
    ...state,
    currentPage: page,
  })),
  on(loadRymSuccess, (state, { rym }) => ({
    ...state,
    rym,
    error: null,
  })),
  on(loadRymFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);
