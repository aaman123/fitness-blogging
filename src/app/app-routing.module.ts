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
import { Post7SteroidsComponent } from './posts/post7-steroids/post7-steroids.component';
import { Post8FitCollegeStudentComponent } from './posts/post8-fit-college-student/post8-fit-college-student.component';
import { Post9FitnessPlateausComponent } from './posts/post9-fitness-plateaus/post9-fitness-plateaus.component';
import { AboutComponent } from './layouts/about/about.component';
import { FitonlinetrainingComponent } from './fitonlinetraining/fitonlinetraining.component';
import { TrainersComponent } from './fitonlinetraining/trainers/trainers.component';
import { WorkoutsComponent } from './fitonlinetraining/workouts/workouts.component';
import { CalorieTrackerComponent } from './fitonlinetraining/calorie-tracker/calorie-tracker.component';
import { RecipeSearchComponent } from './fitonlinetraining/calorie-tracker/recipe-search/recipe-search.component';
import { Post10MuscleGainTimeComponent } from './posts/post10-muscle-gain-time/post10-muscle-gain-time.component';
import { Post11FatLossComponent } from './posts/post11-fat-loss/post11-fat-loss.component';




const routes: Routes = [
  { path: '' , redirectTo: '/home' , pathMatch: 'full'},
  {
    path: 'home',
    loadChildren: () => import('../app/home/home.module').then(m => m.HomeModule),
  },
  // { path: 'bodybuilding_beginners_guide' , component: Post1BeginnersComponent , data: {animation: 'post1'},},
  // { path: 'best_protein_supplements' , component: Post2SupplementsForBeginnersComponent , data: {animation: 'post2'},},
  // { path: 'beginners_exercise' , component: Post3ExerciseBeginnersComponent , data: {animation: 'post3'},},
  // { path: 'immunity_infections' , component:Post4CoronainfectionsComponent , data: {animation: 'post4'},},
  // { path: 'balanced_diet', component: Post5BalancedDietComponent , data: {animation: 'post5'},},
  // { path: 'broscience_busted' , component: Post6BroscienceBustedComponent, data: {animation: 'post6'},},
  // { path: 'steroids', component: Post7SteroidsComponent, data: {animation: 'post5'}},
  // { path: 'fit_student' , component: Post8FitCollegeStudentComponent, data: {animation: 'post6'}},
  // { path: 'bodybuilding_plateaus', component: Post9FitnessPlateausComponent, data: {animation: 'post5'}},
  // { path: 'how_much_time_to_gain_muscle', component: Post10MuscleGainTimeComponent, data: {animation: 'post6'}},
  // { path: 'fat_loss', component: Post11FatLossComponent, data: {animation: 'post5'}},
  // {
  //   path: 'blog',
  //   loadChildren: () => import('../app/posts/posts.module').then(m => m.PostsModule)
  // },

  {
    path: 'bodybuilding_beginners_guide',
        loadChildren: () => import('./posts/post1-beginners/post1-beginners.module').then(m => m.Post1BeginnersModule)

  },

  {
    path: 'best_protein_supplements',
        loadChildren: () => import('./posts/post2-supplements-for-beginners/post2-supplements-for-beginners.module').then(m => m.Post2SupplementsForBeginnersModule)
  },

  {
    path: 'beginners_exercise',
        loadChildren: () => import('./posts/post3-exercise-beginners/post3-exercise-beginners.module').then(m => m.Post3ExerciseBeginnersModule)
  },

  {
    path: 'immunity_infections',
        loadChildren: () => import('./posts/post4-coronainfections/post4-coronainfections.module').then(m => m.Post4CoronainfectionsModule)
  },

  {
    path: 'balanced_diet',
        loadChildren: () => import('./posts/post5-balanced-diet/post5-balanced-diet.module').then(m => m.Post5BalancedDietModule)
  },

  {
    path: 'broscience_busted',
        loadChildren: () => import('./posts/post6-broscience-busted/post6-broscience-busted.module').then(m => m.Post6BroscienceBustedModule)
  },

  {
    path: 'steroids',
        loadChildren: () => import('./posts/post7-steroids/post7-steroids.module').then(m => m.Post7SteroidsModule)
  },

  {
    path: 'fit_student',
        loadChildren: () => import('./posts/post8-fit-college-student/post8-fit-college-student.module').then(m => m.Post8FitCollegeStudentModule)
  },

  {
    path: 'bodybuilding_plateaus',
        loadChildren: () => import('./posts/post9-fitness-plateaus/post9-fitness-plateaus.module').then(m => m.Post9FitnessPlateausModule)
  },

  {
    path: 'how_much_time_to_gain_muscle',
        loadChildren: () => import('./posts/post10-muscle-gain-time/post10-muscle-gain-time.module').then(m => m.Post10MuscleGainTimeModule)
  },

  {
    path: 'fat_loss',
        loadChildren: () => import('./posts/post11-fat-loss/post11-fat-loss.module').then(m => m.Post11FatLossModule)
  },


  { path: 'newsletter' , 
    loadChildren: () => import('../app/newsletter/newsletter.module').then(m => m.NewsletterModule)
  },

  { path: 'newsletter2' , 
    loadChildren: () => import('../app/layouts/newsletter2/newsletter2.module').then(m => m.Newsletter2Module) 
  },
  { path: 'about' , 
    loadChildren: () => import('../app/layouts/about/about.module').then(m => m.AboutModule)
  },
  { 
    path: 'best_home_exercises',
    loadChildren: () => import('./posts/post12-best-home-exercises/post12-best-home-exercises.module').then(m => m.Post12BestHomeExercisesModule) 
  },
  { path: 'train_with_them' , component: FitonlinetrainingComponent},
  { path: 'trainers', component: TrainersComponent, data: {animation: 'trainers'}},
  { path: 'workouts', component: WorkoutsComponent, data: {animation: 'workouts'}},
  { path: 'calorie_tracker', component: CalorieTrackerComponent},
  { path: 'recipe_search', component: RecipeSearchComponent},
  { path: 'BMI_Calculator', loadChildren: () => import('./fitonlinetraining/bmi-calculator/bmi-calculator.module').then(m => m.BMICalculatorModule) },
  { path: 'navbar', loadChildren: () => import('./layouts/navbar/navbar.module').then(m => m.NavbarModule) },
  { path: 'weight_loss_journey_elleah', loadChildren: () => import('./posts/post13-elleah-morgan/post13-elleah-morgan.module').then(m => m.Post13ElleahMorganModule) },
  
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
