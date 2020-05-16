import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Post6BroscienceBustedRoutingModule } from './post6-broscience-busted-routing.module';
import { Post6BroscienceBustedComponent } from './post6-broscience-busted.component';
import { FooterModule } from 'src/app/layouts/footer/footer.module';
import { SidebarModule } from 'src/app/layouts/sidebar/sidebar.module';


@NgModule({
  declarations: [
    Post6BroscienceBustedComponent
  ],
  imports: [
    CommonModule,
    Post6BroscienceBustedRoutingModule,
    FooterModule,
    SidebarModule,
  ]
})
export class Post6BroscienceBustedModule { }
