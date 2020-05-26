import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Post1BeginnersRoutingModule } from './post1-beginners-routing.module';
import { Post1BeginnersComponent } from './post1-beginners.component';
import { SidebarModule } from 'src/app/layouts/sidebar/sidebar.module';
import { FooterModule } from 'src/app/layouts/footer/footer.module';
import { NavbarModule } from 'src/app/layouts/navbar/navbar.module';



@NgModule({
  declarations: [
    Post1BeginnersComponent,

  ],
  imports: [
    CommonModule,
    Post1BeginnersRoutingModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    
  ]
})
export class Post1BeginnersModule { }
