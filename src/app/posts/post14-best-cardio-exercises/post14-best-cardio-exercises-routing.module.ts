import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Post14BestCardioExercisesComponent } from './post14-best-cardio-exercises.component';

const routes: Routes = [{ path: '', component: Post14BestCardioExercisesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Post14BestCardioExercisesRoutingModule { }
