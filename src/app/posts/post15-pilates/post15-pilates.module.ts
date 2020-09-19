import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Post15PilatesRoutingModule } from './post15-pilates-routing.module';
import { Post15PilatesComponent } from './post15-pilates.component';
import { SidebarModule } from 'src/app/layouts/sidebar/sidebar.module';
import { NavbarModule } from 'src/app/layouts/navbar/navbar.module';
import { FooterModule } from 'src/app/layouts/footer/footer.module';



@NgModule({
  declarations: [Post15PilatesComponent],
  imports: [
    CommonModule,
    Post15PilatesRoutingModule,
    SidebarModule,
    NavbarModule,
    FooterModule
  ]
})
export class Post15PilatesModule { }
