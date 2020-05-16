import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Post10MuscleGainTimeComponent } from './post10-muscle-gain-time.component';


const routes: Routes = [
  {
    path: '',
    component: Post10MuscleGainTimeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Post10MuscleGainTimeRoutingModule { }
