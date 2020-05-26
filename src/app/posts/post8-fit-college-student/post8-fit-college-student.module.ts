import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Post8FitCollegeStudentRoutingModule } from './post8-fit-college-student-routing.module';
import { Post8FitCollegeStudentComponent } from './post8-fit-college-student.component';
import { FooterModule } from 'src/app/layouts/footer/footer.module';
import { SidebarModule } from 'src/app/layouts/sidebar/sidebar.module';
import { NavbarModule } from 'src/app/layouts/navbar/navbar.module';


@NgModule({
  declarations: [
    Post8FitCollegeStudentComponent
  ],
  imports: [
    CommonModule,
    Post8FitCollegeStudentRoutingModule,
    NavbarModule,
    SidebarModule,
    FooterModule,


  ]
})
export class Post8FitCollegeStudentModule { }
