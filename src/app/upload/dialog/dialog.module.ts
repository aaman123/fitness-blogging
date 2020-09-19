import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DialogRoutingModule } from './dialog-routing.module';
import { DialogComponent } from './dialog.component';




@NgModule({
  declarations: [DialogComponent],
  imports: [
    CommonModule,
    DialogRoutingModule,
  ],
  exports: [
  
  ]
})
export class DialogModule { }
