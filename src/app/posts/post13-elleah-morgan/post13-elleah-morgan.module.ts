import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Post13ElleahMorganRoutingModule } from './post13-elleah-morgan-routing.module';
import { Post13ElleahMorganComponent } from './post13-elleah-morgan.component';
import { NavbarModule } from 'src/app/layouts/navbar/navbar.module';
import { SidebarModule } from 'src/app/layouts/sidebar/sidebar.module';
import { FooterModule } from 'src/app/layouts/footer/footer.module';


@NgModule({
  declarations: [Post13ElleahMorganComponent],
  imports: [
    CommonModule,
    Post13ElleahMorganRoutingModule,
    NavbarModule,
    SidebarModule,
    FooterModule
  ]
})
export class Post13ElleahMorganModule { }
