import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from '../interfaces/car.interface';
import { Skip } from '../interfaces/skip.interface';

import { Store } from '@ngrx/store';
import { State as RootState } from '../reducers/root.reducer';
import { AddCarsAction, DeleteCarAction, UpdateCarAction } from '../actions/cars.action';
import { SkipCarAction } from '../actions/skip.action';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class CarService {
  private skip: number = 0;
  private take: number = 5;
  private skipSubscription: Subscription;
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
        if(!this.skipSubscription) {
          this.skipSubscription = this.store.select('skip').subscribe((skip: any) => {
            this.skip = skip.skip;
            console.log(this.skip);
          });
        }
      });
  }

  public deleteCar(id: number): void {
    this.httpClient.delete(`https://car-crud.herokuapp.com/${id}`)
      .subscribe(() => {
        this.store.dispatch(new DeleteCarAction(id));
       });
  }
  public updateCar(id: number, car: any): void {
    this.httpClient.put(`https://car-crud.herokuapp.com/${id}`, car)
      .subscribe(data => {
        this.store.dispatch(new UpdateCarAction(car));
      });
  }

  public addMoreCars(): void {
    this.getCars();
  }
}
