import { Action } from '@ngrx/store';
import { Skip } from '../interfaces/skip.interface';

export const SKIP_CAR_ACTION = 'SKIP_CAR_ACTION';

export class SkipCarAction implements Action {
  public readonly type: string = SKIP_CAR_ACTION;
  constructor(public payload: number) { }
}

export type Actions =
  | SkipCarAction;