import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { Post1BeginnersComponent } from '../app/posts/post1-beginners/post1-beginners.component';
import { Post2SupplementsForBeginnersComponent } from './posts/post2-supplements-for-beginners/post2-supplements-for-beginners.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { Post3ExerciseBeginnersComponent } from './posts/post3-exercise-beginners/post3-exercise-beginners.component';

const routes: Routes = [
  { path: '' , component: HomeComponent},
  { path: 'bodybuilding_beginners_guide' , component: Post1BeginnersComponent},
  { path: 'best_protein_supplements' , component: Post2SupplementsForBeginnersComponent},
  { path:'beginners_exercise' , component: Post3ExerciseBeginnersComponent},
  { path: 'newsletter' , component:NewsletterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
