import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Post4CoronainfectionsRoutingModule } from './post4-coronainfections-routing.module';
import { Post4CoronainfectionsComponent } from './post4-coronainfections.component';
import { FooterModule } from 'src/app/layouts/footer/footer.module';
import { SidebarModule } from 'src/app/layouts/sidebar/sidebar.module';
import { NavbarModule } from 'src/app/layouts/navbar/navbar.module';



@NgModule({
  declarations: [
    Post4CoronainfectionsComponent,

  ],
  imports: [
    CommonModule,
    Post4CoronainfectionsRoutingModule,
    NavbarModule,
    SidebarModule,
    FooterModule,
  ]
})
export class Post4CoronainfectionsModule { }
