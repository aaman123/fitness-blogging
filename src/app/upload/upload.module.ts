import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadRoutingModule } from './upload-routing.module';
import { UploadComponent } from './upload.component';
import {
  MatButtonModule,
} from '@angular/material/button';
import {
  MatDialogModule,
} from '@angular/material/dialog';
import {
  MatListModule,
} from '@angular/material/list';
import {
  MatProgressBarModule,
} from '@angular/material/progress-bar';

import { DialogComponent } from './dialog/dialog.component';

import { FlexLayoutModule } from '@angular/flex-layout'
import { HttpClientModule } from '@angular/common/http'

import { UploadService } from './upload.service';



@NgModule({
  declarations: [UploadComponent, DialogComponent],
  imports: [
    CommonModule,
    UploadRoutingModule,
    MatButtonModule,
    MatDialogModule,
    MatListModule,
    FlexLayoutModule,
    HttpClientModule,
  
    MatProgressBarModule,

  ],

  entryComponents: [
    DialogComponent
  ],

  exports: [UploadComponent],


  providers: [UploadService],

})
export class UploadModule { }
