import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { TrainersComponent } from '../../trainers/trainers.component';
import { WorkoutsComponent } from '../../workouts/workouts.component';
import { AdminRoutes } from './admin.routing'; 


@NgModule({
    imports: [
      RouterModule.forChild(AdminRoutes),
      HttpClientModule,,
    ],
    declarations: [
        TrainersComponent,
        WorkoutsComponent
      // RtlComponent
    ]
  })

export class AdminModule {}