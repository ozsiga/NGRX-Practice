import { ActionReducerMap } from '@ngrx/store';
import * as CarsReducer from './cars.reducer';
import * as SkipReducer from './skip.reducer';

export interface State {
  cars: CarsReducer.State;
  skip: SkipReducer.State;
}
export function reducers(): ActionReducerMap<State> {
  return {
    cars: CarsReducer.reducer,
    skip: SkipReducer.reducer,
  };
}