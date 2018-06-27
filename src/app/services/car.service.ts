import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from '../interfaces/car.interface';
import { Skip } from '../interfaces/skip.interface';

import { Store } from '@ngrx/store';
import { State as RootState } from '../reducers/root.reducer';
import { AddCarsAction } from '../actions/cars.action';
import { SkipCarAction } from '../actions/skip.action';

@Injectable()
export class CarService {
  private skip: number = 0;
  private take: number = 5;
  constructor(private httpClient: HttpClient, private store: Store<RootState>) {
    //
  }
  public createCar(car: any): void {
    this.httpClient.post('https://car-crud.herokuapp.com/create', car)
      .subscribe((car: Car) => {
        // console.log(car);
      });
  }


  public getCars(): void {
    this.httpClient.get(`https://car-crud.herokuapp.com/?skip=${this.skip}&take=${this.take}`)
      .subscribe((cars: Car[]) => {
        this.store.dispatch(new AddCarsAction(cars));
        this.store.dispatch(new SkipCarAction(null));
        this.store.select('skip').subscribe((skip: any) => {
          this.skip = skip.skip;
        });
      });
  }

  public addMoreCars(): void {
    this.getCars();
  }
}
