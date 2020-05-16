import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Post9FitnessPlateausComponent } from './post9-fitness-plateaus.component';


const routes: Routes = [
  {
    path: '',
    component: Post9FitnessPlateausComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Post9FitnessPlateausRoutingModule { }
