import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Newsletter2RoutingModule } from './newsletter2-routing.module';
import { Newsletter2Component } from './newsletter2.component';


@NgModule({
  declarations: [
    Newsletter2Component
  ],
  imports: [
    CommonModule,
    Newsletter2RoutingModule
  ]
})
export class Newsletter2Module { }
