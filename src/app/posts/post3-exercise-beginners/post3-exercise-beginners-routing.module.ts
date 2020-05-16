import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Post3ExerciseBeginnersComponent } from './post3-exercise-beginners.component';


const routes: Routes = [
  {
    path: '',
    component: Post3ExerciseBeginnersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Post3ExerciseBeginnersRoutingModule { }
