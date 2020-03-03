import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { Post1BeginnersComponent } from '../app/posts/post1-beginners/post1-beginners.component';
import { Post2SupplementsForBeginnersComponent } from './posts/post2-supplements-for-beginners/post2-supplements-for-beginners.component';

const routes: Routes = [
  { path: '' , component: HomeComponent},
  { path: 'post1' , component: Post1BeginnersComponent},
  { path: 'post2' , component: Post2SupplementsForBeginnersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
