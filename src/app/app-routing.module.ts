import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { Post1BeginnersComponent } from '../app/posts/post1-beginners/post1-beginners.component';
import { Post2SupplementsForBeginnersComponent } from './posts/post2-supplements-for-beginners/post2-supplements-for-beginners.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { Newsletter2Component } from './layouts/newsletter2/newsletter2.component';
import { Post3ExerciseBeginnersComponent } from './posts/post3-exercise-beginners/post3-exercise-beginners.component';
import { Post4CoronainfectionsComponent } from './posts/post4-coronainfections/post4-coronainfections.component'; 
import { AboutComponent } from './layouts/about/about.component';
import { FitonlinetrainingComponent } from './fitonlinetraining/fitonlinetraining.component';


const routes: Routes = [
  { path: '' , component: HomeComponent},
  { path: 'bodybuilding_beginners_guide' , component: Post1BeginnersComponent},
  { path: 'best_protein_supplements' , component: Post2SupplementsForBeginnersComponent},
  { path:'beginners_exercise' , component: Post3ExerciseBeginnersComponent},
  { path:'immunity_infections' , component:Post4CoronainfectionsComponent},
  { path: 'newsletter' , component:NewsletterComponent},
  { path: 'newsletter2' , component: Newsletter2Component},
  { path: 'about' , component: AboutComponent},
  { path: 'train_with_them' , component: FitonlinetrainingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
