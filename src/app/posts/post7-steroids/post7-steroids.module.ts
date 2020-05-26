import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Post7SteroidsRoutingModule } from './post7-steroids-routing.module';
import { Post7SteroidsComponent } from './post7-steroids.component';
import { FooterModule } from 'src/app/layouts/footer/footer.module';
import { SidebarModule } from 'src/app/layouts/sidebar/sidebar.module';
import { NavbarModule } from 'src/app/layouts/navbar/navbar.module';



@NgModule({
  declarations: [
    Post7SteroidsComponent
  ],
  imports: [
    CommonModule,
    Post7SteroidsRoutingModule,
    NavbarModule,
    SidebarModule,
    FooterModule,
  ]
})
export class Post7SteroidsModule { }
