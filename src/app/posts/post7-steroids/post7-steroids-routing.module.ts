import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Post7SteroidsComponent } from './post7-steroids.component';


const routes: Routes = [
  {
    path: '',
    component: Post7SteroidsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Post7SteroidsRoutingModule { }
