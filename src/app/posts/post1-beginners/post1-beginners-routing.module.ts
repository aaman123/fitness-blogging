import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Post1BeginnersComponent } from './post1-beginners.component';


const routes: Routes = [
  { path: '' , component: Post1BeginnersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Post1BeginnersRoutingModule { }
