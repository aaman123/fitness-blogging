import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Post11FatLossRoutingModule } from './post11-fat-loss-routing.module';
import { Post11FatLossComponent } from './post11-fat-loss.component';
import { FooterModule } from 'src/app/layouts/footer/footer.module';
import { SidebarModule } from 'src/app/layouts/sidebar/sidebar.module';


@NgModule({
  declarations: [
    Post11FatLossComponent
  ],
  imports: [
    CommonModule,
    Post11FatLossRoutingModule,
    SidebarModule,
    FooterModule,

  ],
  exports: [
    Post11FatLossComponent
  ]
})
export class Post11FatLossModule { }
