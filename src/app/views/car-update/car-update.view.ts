import { Component } from '@angular/core';
import { CarService } from '../../services/car.service';
import { Store } from '@ngrx/store';
import { State as RootState } from '../../reducers/root.reducer';
import * as carsReducer from '../../reducers/cars.reducer';
import { Car } from '../../interfaces/car.interface';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.view.pug',
  styleUrls: ['./car-update.view.scss'],
})

export class CarUpdateView {
  public car: Car = null;
  private updatedCar: any = {
  title: '',
  description: '',
  brand: '',
  type: '',
  year: null,
  cylinderVolume: null,
  phoneNumber: '',
  emailAddress: ''};
  private carsSubscription: Subscription;
  constructor(private store: Store<RootState>, private carService: CarService, private route: ActivatedRoute) {
    const id = +this.route.snapshot.paramMap.get('id');
    this.store.select(carsReducer.selectCar(id)).subscribe(car => {
      this.car = car;
      this.updatedCar = car;
    });
  }
  public updateCar(id: number): void {
      this.carService.updateCar(id, this.updatedCar);
    }

  /*   public ngOnDestroy(): void {
      this.carsSubscription.unsubscribe();
    } */
}