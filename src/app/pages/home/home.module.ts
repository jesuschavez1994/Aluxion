import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HomeComponent } from './home/home.component';
import { CardsComponent } from '../components/cards/cards.component';
import { BreadcrumComponent } from '../components/breadcrum/breadcrum.component';
import { ModalInfoComponent } from '../components/modal-info/modal-info.component';
import { HomeRouterModule } from './home-router.module';
import { WrapperComponent } from '../components/wrapper/wrapper/wrapper.component';
import { SharedModule } from '../../shared/shared.module';

/* 
  declaratios are here
*/

const DECLARATIONS = [
  BreadcrumComponent,
  CardsComponent,
  HomeComponent,
  ModalInfoComponent,
  WrapperComponent
]

/* 
  moduls are here
*/

const MODULS = [
  CommonModule,
  HomeRouterModule,
  ReactiveFormsModule,
  SharedModule,
  MatSnackBarModule

]

@NgModule({
  declarations: [...DECLARATIONS],
  imports: [...MODULS],
  exports: [...DECLARATIONS],
  providers:[]
})
export class HomeModule { }