import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header/header.component';
import { RouterModule } from '@angular/router';
import { AnimationsComponent } from './animations/animations/animations.component';
import {MatDialogModule} from '@angular/material/dialog';
import { SearchComponent } from './search/search.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
/* 
  declaratios are here
*/

const DECLARATIONS = [
  AnimationsComponent,
  HeaderComponent,
  SearchComponent
    
]

/* 
  moduls are here
*/

const MODULS = [
  CommonModule,
  ReactiveFormsModule,
  RouterModule,
  MatDialogModule,
  MatProgressBarModule
]

@NgModule({
  declarations: [...DECLARATIONS],
  imports: [...MODULS],
  exports : [...DECLARATIONS],
  providers:[]
})
export class SharedModule { }
