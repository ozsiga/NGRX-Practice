import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './reducers/root.reducer';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import * as Views from './views';
import { NetworkService } from './services/network.service';
import { CarService } from './services/car.service';
import { AngularMaterialModule } from './angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ...Object.keys(Views).map(classKey => Views[classKey]),
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers()),
    StoreDevtoolsModule.instrument({ maxAge: 100 }),
    AppRoutingModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [NetworkService, CarService],
  bootstrap: [AppComponent],
})
export class AppModule { }
