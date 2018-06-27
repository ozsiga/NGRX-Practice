import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as SkipActions from '../actions/skip.action';
import { Skip } from '../interfaces/skip.interface';

export interface State {
  skip: number;
  take: number;
}

const initialState: State = {
  skip: 0,
  take: 5,
};
export function reducer(state: State = initialState, action: SkipActions.Actions): State {
  switch (action.type) {
    case SkipActions.SKIP_CAR_ACTION: {
      return {
        ...state,
        skip: state.skip = state.skip + state.take,
      };
    }
    default: {
      return state;
    }
  }
}