import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { Post1BeginnersComponent } from '../app/posts/post1-beginners/post1-beginners.component';
import { Post2SupplementsForBeginnersComponent } from './posts/post2-supplements-for-beginners/post2-supplements-for-beginners.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { Newsletter2Component } from './layouts/newsletter2/newsletter2.component';
import { Post3ExerciseBeginnersComponent } from './posts/post3-exercise-beginners/post3-exercise-beginners.component';
import { Post4CoronainfectionsComponent } from './posts/post4-coronainfections/post4-coronainfections.component'; 
import { Post5BalancedDietComponent } from './posts/post5-balanced-diet/post5-balanced-diet.component';
import { Post6BroscienceBustedComponent } from './posts/post6-broscience-busted/post6-broscience-busted.component';
import { AboutComponent } from './layouts/about/about.component';
import { FitonlinetrainingComponent } from './fitonlinetraining/fitonlinetraining.component';
import { TrainersComponent } from './fitonlinetraining/trainers/trainers.component';
import { WorkoutsComponent } from './fitonlinetraining/workouts/workouts.component';



const routes: Routes = [
  { path: '' , component: HomeComponent},
  { path: 'bodybuilding_beginners_guide' , component: Post1BeginnersComponent , data: {animation: 'post1'},},
  { path: 'best_protein_supplements' , component: Post2SupplementsForBeginnersComponent , data: {animation: 'post2'},},
  { path: 'beginners_exercise' , component: Post3ExerciseBeginnersComponent , data: {animation: 'post3'},},
  { path: 'immunity_infections' , component:Post4CoronainfectionsComponent , data: {animation: 'post4'},},
  { path: 'balanced_diet', component: Post5BalancedDietComponent , data: {animation: 'post5'},},
  { path: 'broscience_busted' , component: Post6BroscienceBustedComponent, data: {animation: 'post6'},},
  { path: 'newsletter' , component:NewsletterComponent},
  { path: 'newsletter2' , component: Newsletter2Component},
  { path: 'about' , component: AboutComponent},
  { path: 'train_with_them' , component: FitonlinetrainingComponent},
  { path: 'trainers', component: TrainersComponent, data: {animation: 'trainers'}},
  { path: 'workouts', component: WorkoutsComponent, data: {animation: 'workouts'}},
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
