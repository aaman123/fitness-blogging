import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Post3ExerciseBeginnersRoutingModule } from './post3-exercise-beginners-routing.module';
import { Post3ExerciseBeginnersComponent } from './post3-exercise-beginners.component';
import { FooterModule } from 'src/app/layouts/footer/footer.module';
import { SidebarModule } from 'src/app/layouts/sidebar/sidebar.module';
import { NavbarModule } from 'src/app/layouts/navbar/navbar.module';


@NgModule({
  declarations: [
    Post3ExerciseBeginnersComponent,
  ],
  imports: [
    CommonModule,
    Post3ExerciseBeginnersRoutingModule,
    NavbarModule,
    SidebarModule,
    FooterModule,
  ]
})
export class Post3ExerciseBeginnersModule { }
