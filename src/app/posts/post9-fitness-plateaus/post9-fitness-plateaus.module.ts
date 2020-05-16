import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Post9FitnessPlateausRoutingModule } from './post9-fitness-plateaus-routing.module';
import { Post9FitnessPlateausComponent } from './post9-fitness-plateaus.component';
import { FooterModule } from 'src/app/layouts/footer/footer.module';
import { SidebarModule } from 'src/app/layouts/sidebar/sidebar.module';


@NgModule({
  declarations: [
    Post9FitnessPlateausComponent
  ],
  imports: [
    CommonModule,
    Post9FitnessPlateausRoutingModule,
    SidebarModule,
    FooterModule,
  ],
  exports: []
})
export class Post9FitnessPlateausModule { }
