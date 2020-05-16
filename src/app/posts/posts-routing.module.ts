import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts.component';


const routes: Routes = [
      // {
      //   path: 'bodybuilding_beginners_guide',
      //       loadChildren: () => import('../posts/post1-beginners/post1-beginners.module').then(m => m.Post1BeginnersModule)

      // },

      // {
      //   path: 'best_protein_supplements',
      //       loadChildren: () => import('../posts/post2-supplements-for-beginners/post2-supplements-for-beginners.module').then(m => m.Post2SupplementsForBeginnersModule)
      // },

      // {
      //   path: 'beginners_exercise',
      //       loadChildren: () => import('../posts/post3-exercise-beginners/post3-exercise-beginners.module').then(m => m.Post3ExerciseBeginnersModule)
      // },

      // {
      //   path: 'immunity_infections',
      //       loadChildren: () => import('../posts/post4-coronainfections/post4-coronainfections.module').then(m => m.Post4CoronainfectionsModule)
      // },

      // {
      //   path: 'balanced_diet',
      //       loadChildren: () => import('../posts/post5-balanced-diet/post5-balanced-diet.module').then(m => m.Post5BalancedDietModule)
      // },

      // {
      //   path: 'broscience_busted',
      //       loadChildren: () => import('../posts/post6-broscience-busted/post6-broscience-busted.module').then(m => m.Post6BroscienceBustedModule)
      // },

      // {
      //   path: 'steroids',
      //       loadChildren: () => import('../posts/post7-steroids/post7-steroids.module').then(m => m.Post7SteroidsModule)
      // },

      // {
      //   path: 'fit_student',
      //       loadChildren: () => import('../posts/post8-fit-college-student/post8-fit-college-student.module').then(m => m.Post8FitCollegeStudentModule)
      // },

      // {
      //   path: 'bodybuilding_plateaus',
      //       loadChildren: () => import('../posts/post9-fitness-plateaus/post9-fitness-plateaus.module').then(m => m.Post9FitnessPlateausModule)
      // },

      // {
      //   path: 'how_much_time_to_gain_muscle',
      //       loadChildren: () => import('../posts/post10-muscle-gain-time/post10-muscle-gain-time.module').then(m => m.Post10MuscleGainTimeModule)
      // },

      // {
      //   path: 'fat_loss',
      //       loadChildren: () => import('../posts/post11-fat-loss/post11-fat-loss.module').then(m => m.Post11FatLossModule)
      // }
   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
