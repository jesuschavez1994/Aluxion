import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StopComponent } from './stop.component';
import { StopDetailComponent } from './components/stop-detail/stop-detail.component';
import { MapComponent } from './components/map/map.component';
import { detailRouterModule } from './detail-router.module';
import { NameStateComponent } from './components/state/name-state/name-state.component';
import { FilterGridComponent } from './components/filter/filter-grid/filter-grid.component';
import { RouterModule } from '@angular/router';
import { HeaderDetailComponent } from './components/header-detail/header-detail/header-detail.component';
import { SharedModule } from '../../shared/shared.module';
import { ButtonMapComponent } from './components/button-map/button-map/button-map.component';
import { ToStopsComponent } from './components/to-stops/to-stops/to-stops.component';

/* 
  declaratios are here
*/

const DECLARATIONS = [
  FilterGridComponent,
  HeaderDetailComponent,
  MapComponent,
  NameStateComponent,
  StopComponent,
  StopDetailComponent,
  ButtonMapComponent,
  ToStopsComponent
]

/* 
  moduls are here
*/

const MODULE = [
  CommonModule,
  detailRouterModule,
  RouterModule,
  SharedModule,
]

@NgModule({
  declarations: [...DECLARATIONS ],
  imports: [...MODULE]
})
export class stopDetaillModule { }
