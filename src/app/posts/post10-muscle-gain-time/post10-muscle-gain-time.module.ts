import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Post10MuscleGainTimeRoutingModule } from './post10-muscle-gain-time-routing.module';
import { Post10MuscleGainTimeComponent } from './post10-muscle-gain-time.component';
import { FooterModule } from 'src/app/layouts/footer/footer.module';
import { SidebarModule } from 'src/app/layouts/sidebar/sidebar.module';


@NgModule({
  declarations: [
    Post10MuscleGainTimeComponent
  ],
  imports: [
    CommonModule,
    Post10MuscleGainTimeRoutingModule,
    SidebarModule,
    FooterModule,


  ],
  exports: [
    Post10MuscleGainTimeComponent
  ]
})
export class Post10MuscleGainTimeModule { }
