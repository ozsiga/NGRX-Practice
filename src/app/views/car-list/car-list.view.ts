import { Component, OnInit, OnDestroy } from '@angular/core';
import { CarService } from '../../services/car.service';
import { Store } from '@ngrx/store';
import { State as RootState } from '../../reducers/root.reducer';
import * as carsReducer from '../../reducers/cars.reducer';
import { Car } from '../../interfaces/car.interface';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.view.pug',
  styleUrls: ['./car-list.view.scss'],
})

export class CarListView implements OnInit, OnDestroy {
  public cars: Car[] = [];
  public carsSubscription: Subscription;
  constructor(private store: Store<RootState>, private carService: CarService) {

  }

  public getCars(): void {
    this.carsSubscription = this.store.select(carsReducer.selectCars).subscribe((cars: Car[]) => {
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

  public deleteCar(id: number, title: string): void {
    const conf = confirm(`Are ou sure, you want to delete: ${title}?`);
    if (conf) {
      this.carService.deleteCar(id);
    }
  }

  public ngOnInit(): void {
    this.getCars();
  }

  public ngOnDestroy(): void {
    if (this.carsSubscription) {
      this.carsSubscription.unsubscribe();
    }
  }

}