import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Post12BestHomeExercisesRoutingModule } from './post12-best-home-exercises-routing.module';
import { Post12BestHomeExercisesComponent } from './post12-best-home-exercises.component';
import { SidebarModule } from 'src/app/layouts/sidebar/sidebar.module';
import { FooterModule } from 'src/app/layouts/footer/footer.module';
import { NavbarModule } from 'src/app/layouts/navbar/navbar.module';


@NgModule({
  declarations: [Post12BestHomeExercisesComponent],
  imports: [
    CommonModule,
    Post12BestHomeExercisesRoutingModule,
    NavbarModule,
    SidebarModule,
    FooterModule
  ]
})
export class Post12BestHomeExercisesModule { }
