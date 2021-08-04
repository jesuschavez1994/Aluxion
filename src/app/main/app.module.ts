import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from '../shared/shared.module';
import { HomeModule } from '@app/pages/home/home.module';
import { ServiceModule } from '../services/service.module';
import { HttpClientModule } from '@angular/common/http';
import { NgwWowModule } from 'ngx-wow';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


/* 
  declaratios are here
*/
const DECLARATIONS = [
  AppComponent
]
/* 
moduls are here
*/
const MODULS = [
  SharedModule,
  BrowserModule,
  AppRoutingModule,
  HomeModule,
  ServiceModule,
  HttpClientModule,
  NgwWowModule,
  BrowserAnimationsModule,
]


@NgModule({
  declarations: [
    ...DECLARATIONS
  ],
  imports: [
    ...MODULS
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
