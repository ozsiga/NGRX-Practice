import { Action } from '@ngrx/store';
import { Car } from '../interfaces/car.interface';

export const ADD_CARS_ACTION = 'ADD_CARS_ACTION';

export class AddCarsAction implements Action {
  public readonly type: string = ADD_CARS_ACTION;
  constructor(public payload: Car[]) {}
}

export type Actions =
  | AddCarsAction;