import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { Post1BeginnersModule } from './post1-beginners/post1-beginners.module';
import { Post2SupplementsForBeginnersModule } from './post2-supplements-for-beginners/post2-supplements-for-beginners.module';
import { Post3ExerciseBeginnersModule } from './post3-exercise-beginners/post3-exercise-beginners.module';
import { Post4CoronainfectionsModule } from './post4-coronainfections/post4-coronainfections.module';
import { Post5BalancedDietModule } from './post5-balanced-diet/post5-balanced-diet.module';
import { Post6BroscienceBustedModule } from './post6-broscience-busted/post6-broscience-busted.module';
import { Post7SteroidsModule } from './post7-steroids/post7-steroids.module';
import { Post8FitCollegeStudentModule } from './post8-fit-college-student/post8-fit-college-student.module';
import { Post9FitnessPlateausModule } from './post9-fitness-plateaus/post9-fitness-plateaus.module';
import { Post10MuscleGainTimeModule } from './post10-muscle-gain-time/post10-muscle-gain-time.module';
import { Post11FatLossModule } from './post11-fat-loss/post11-fat-loss.module';
import { PostsComponent } from './posts.component';
import { SidebarModule } from '../layouts/sidebar/sidebar.module';
import { FooterModule } from '../layouts/footer/footer.module';


@NgModule({
  declarations: [
    PostsComponent
  ],
  imports: [
    CommonModule,
    SidebarModule,
    FooterModule,
    PostsRoutingModule,
    Post1BeginnersModule,
    Post2SupplementsForBeginnersModule,
    Post3ExerciseBeginnersModule,
    Post4CoronainfectionsModule,
    Post5BalancedDietModule,
    Post6BroscienceBustedModule,
    Post7SteroidsModule,
    Post8FitCollegeStudentModule,
    Post9FitnessPlateausModule,
    Post10MuscleGainTimeModule,
    Post11FatLossModule
  ]
})
export class PostsModule { }
