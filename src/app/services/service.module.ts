import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenerateTokenService } from './login/generate-token.service';
import { CascaronService } from './crud/cascaron.service';

const PROVIDERS = [
  GenerateTokenService,
  CascaronService
]

@NgModule({
  declarations: [],
  providers: [...PROVIDERS],
  imports: [
    CommonModule
  ]
})
export class ServiceModule { }
