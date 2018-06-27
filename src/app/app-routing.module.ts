import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CarListView, CreateCarView, CarDetailsView } from './views';

const routes: Routes = [
  { path: 'car-list', component: CarListView },
  { path: 'create-car', component: CreateCarView },
  { path: 'car-details/:id', component: CarDetailsView },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
  declarations: [],
})
export class AppRoutingModule { }
