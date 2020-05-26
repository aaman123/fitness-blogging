import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Post2SupplementsForBeginnersRoutingModule } from './post2-supplements-for-beginners-routing.module';
import { Post2SupplementsForBeginnersComponent } from './post2-supplements-for-beginners.component';
import { FooterModule } from 'src/app/layouts/footer/footer.module';
import { SidebarModule } from 'src/app/layouts/sidebar/sidebar.module';
import { NavbarModule } from 'src/app/layouts/navbar/navbar.module';


@NgModule({
  declarations: [
    Post2SupplementsForBeginnersComponent,
  ],
  imports: [
    CommonModule,
    Post2SupplementsForBeginnersRoutingModule,
    NavbarModule,
    SidebarModule,
    FooterModule
  ]
})
export class Post2SupplementsForBeginnersModule { }
