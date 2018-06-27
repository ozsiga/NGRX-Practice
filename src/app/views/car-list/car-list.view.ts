import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';
import { Store } from '@ngrx/store';
import { State as RootState } from '../../reducers/root.reducer';
import * as carsReducer from '../../reducers/cars.reducer';
import { Car } from '../../interfaces/car.interface';
import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.view.pug',
  styleUrls: ['./car-list.view.scss'],
})

export class CarListView implements OnInit {
  public cars: Car[] = [];
  public carsSubscription: Subscription;
  constructor(private store: Store<RootState>, private carService: CarService) {

  }

  public getCars(): void {
    this.store.select(carsReducer.selectCars).subscribe((cars: Car[]) => {
      if (cars.length === 0) {
        this.carService.getCars();
      } else {
        this.cars = cars;
      }
    });
  }

  public addMoreCar(): void {
    this.carService.addMoreCars();
  }

  public ngOnInit(): void {
    this.getCars();
  }

  /*   public ngOnDestroy(): void {
      this.carsSubscription.unsubscribe();
    } */

}