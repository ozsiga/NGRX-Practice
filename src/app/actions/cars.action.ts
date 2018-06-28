import { Action } from '@ngrx/store';
import { Car } from '../interfaces/car.interface';

export const ADD_CARS_ACTION = 'ADD_CARS_ACTION';
export const DELETE_CAR_ACTION = 'DELETE_CAR_ACTION';
export const UPDATE_CAR_ACTION = 'UPDATE_CAR_ACTION';

export class AddCarsAction implements Action {
  // tslint:disable-next-line
  public readonly type = ADD_CARS_ACTION;
  constructor(public payload: Car[]) {}
}

export class DeleteCarAction implements Action {
  // tslint:disable-next-line
  public readonly type = DELETE_CAR_ACTION;
  constructor(public payload: number) {}
}

export class UpdateCarAction implements Action {
  // tslint:disable-next-line
  public readonly type = UPDATE_CAR_ACTION;
  constructor(public payload: Car) {}
}

export type Actions =
  | AddCarsAction
  | UpdateCarAction
  | DeleteCarAction;