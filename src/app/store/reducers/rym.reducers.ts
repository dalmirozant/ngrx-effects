import { createReducer, on } from "@ngrx/store";
import { RymState } from "../../models/rym.interface";
import { loadRymFailure, loadRymSuccess } from "../actions/rym.actions";

export const initialState: RymState = {
    rym: [],
    error: null,
}

export const rymReducer = createReducer(
    initialState,
    on(loadRymSuccess,(state, { rym }) => ({
        ...state,
        rym,
        error: null
      })),
    on(loadRymFailure,(state,{error}) => ({
        ...state,
        error
    }))
)