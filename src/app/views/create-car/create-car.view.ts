import { Component } from '@angular/core';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.view.pug',
  styleUrls: ['./create-car.view.scss'],
})

export class CreateCarView {
  public car: any = {
    title: '',
    description: '',
    brand: '',
    type: '',
    year: null,
    cylinderVolume: null,
    phoneNumber: null,
    emailAddress: '',
  }
  constructor(public carService: CarService) {
    //
  }

  public createCar(): void {
    this.carService.createCar(this.car);
  }
}