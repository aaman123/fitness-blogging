import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Post5BalancedDietRoutingModule } from './post5-balanced-diet-routing.module';
import { Post5BalancedDietComponent } from './post5-balanced-diet.component';
import { FooterModule } from 'src/app/layouts/footer/footer.module';
import { SidebarModule } from 'src/app/layouts/sidebar/sidebar.module';
import { NavbarModule } from 'src/app/layouts/navbar/navbar.module';


@NgModule({
  declarations: [
    Post5BalancedDietComponent
  ],
  imports: [
    CommonModule,
    Post5BalancedDietRoutingModule,
    NavbarModule,
    SidebarModule,
    FooterModule,

  ]
})
export class Post5BalancedDietModule { }
