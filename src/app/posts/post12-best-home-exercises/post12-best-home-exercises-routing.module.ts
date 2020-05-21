import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Post12BestHomeExercisesComponent } from './post12-best-home-exercises.component';

const routes: Routes = [{ path: '', component: Post12BestHomeExercisesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Post12BestHomeExercisesRoutingModule { }
