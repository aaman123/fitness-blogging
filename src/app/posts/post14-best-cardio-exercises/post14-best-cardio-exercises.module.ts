import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Post14BestCardioExercisesRoutingModule } from './post14-best-cardio-exercises-routing.module';
import { Post14BestCardioExercisesComponent } from './post14-best-cardio-exercises.component';
import { SidebarModule } from 'src/app/layouts/sidebar/sidebar.module';
import { NavbarModule } from 'src/app/layouts/navbar/navbar.module';
import { FooterModule } from 'src/app/layouts/footer/footer.module';


@NgModule({
  declarations: [Post14BestCardioExercisesComponent],
  imports: [
    CommonModule,
    Post14BestCardioExercisesRoutingModule,
    SidebarModule,
    NavbarModule,
    FooterModule
  ]
})
export class Post14BestCardioExercisesModule { }
