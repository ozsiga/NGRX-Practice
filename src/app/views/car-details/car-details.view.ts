import { Component } from '@angular/core';
import { CarService } from '../../services/car.service';
import { Store } from '@ngrx/store';
import { State as RootState } from '../../reducers/root.reducer';
import * as carsReducer from '../../reducers/cars.reducer';
import { Car } from '../../interfaces/car.interface';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.view.pug',
  styleUrls: ['./car-details.view.scss'],
})

export class CarDetailsView {
  public car: Car = null;
  private carsSubscription: Subscription;
  constructor(private store: Store<RootState>, private carService: CarService, private route: ActivatedRoute) {
    const id = +this.route.snapshot.paramMap.get('id');
    this.store.select(carsReducer.selectCar(id)).subscribe(car => {
      this.car = car;
    });
  }

  /*   public ngOnDestroy(): void {
      this.carsSubscription.unsubscribe();
    } */
}