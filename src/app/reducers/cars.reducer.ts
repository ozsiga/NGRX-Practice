import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as CarsActions from '../actions/cars.action';
import { Car } from '../interfaces/car.interface';

export interface State {
  cars: Car[];
  skip: number;
  take: number;
}

const initialState: State = {
  cars: [],
  skip: 0,
  take: 5,
};
export function reducer(state: State = initialState, action: CarsActions.Actions): State {
  switch (action.type) {
    case CarsActions.DELETE_CAR_ACTION: {
      const index = state.cars.findIndex(car => car.id === action.payload);

      if(index < 0) {
        return {
          ...state,
        };
      } else {
        state.cars.splice(index, 1);

        return {
          ...state,
          cars: state.cars,
        };
      }
    }

    case CarsActions.UPDATE_CAR_ACTION: {
      let updateCar = state.cars.find(car => car.id === action.payload.id);
      updateCar = action.payload;

      return {
        ...state,
      };
    }

    case CarsActions.ADD_CARS_ACTION: {
      return {
        ...state,
        cars: state.cars.concat(action.payload),
      };
    }
    default: {
      return state;
    }
  }
}
export const selectCarsState = createFeatureSelector<State>('cars');
export const selectCars = createSelector(selectCarsState, (state: State) => state.cars);
export const selectCar = (id: number) => createSelector(selectCarsState, (state: State) => {
  return state.cars.find(car => car.id === id);
});