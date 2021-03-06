import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { OwlModule } from 'ngx-owl-carousel';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HomeComponent } from './home/home.component';
// import { PostsComponent } from './posts/posts.component';
// import { Post1BeginnersComponent } from './posts/post1-beginners/post1-beginners.component';
// import { Post2SupplementsForBeginnersComponent } from './posts/post2-supplements-for-beginners/post2-supplements-for-beginners.component';
// import { Post3ExerciseBeginnersComponent } from './posts/post3-exercise-beginners/post3-exercise-beginners.component';
// import { Post4CoronainfectionsComponent } from './posts/post4-coronainfections/post4-coronainfections.component';
// import { Post5BalancedDietComponent } from './posts/post5-balanced-diet/post5-balanced-diet.component';
// import { Post6BroscienceBustedComponent } from './posts/post6-broscience-busted/post6-broscience-busted.component';
// import { Post7SteroidsComponent } from './posts/post7-steroids/post7-steroids.component';
// import { Post8FitCollegeStudentComponent } from './posts/post8-fit-college-student/post8-fit-college-student.component';
// import { Post9FitnessPlateausComponent } from './posts/post9-fitness-plateaus/post9-fitness-plateaus.component';
// import { Post10MuscleGainTimeComponent } from './posts/post10-muscle-gain-time/post10-muscle-gain-time.component';
// import { Post11FatLossComponent } from './posts/post11-fat-loss/post11-fat-loss.component';

// import { Newsletter2Component } from '../app/layouts/newsletter2/newsletter2.component';
// import { NewsletterComponent } from './newsletter/newsletter.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
// import { AboutComponent } from './layouts/about/about.component';
import { FitonlinetrainingComponent } from './fitonlinetraining/fitonlinetraining.component';

import { FitSidebarComponent } from './fitonlinetraining/layouts/fit-sidebar/fit-sidebar.component';
import { CommonModule } from '@angular/common';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { HttpClientModule } from '@angular/common/http';
import { NgtUniversalModule } from '@ng-toolkit/universal';
import { NgwWowModule } from 'ngx-wow';
import { TrainersComponent } from './fitonlinetraining/trainers/trainers.component';
import { WorkoutsComponent } from './fitonlinetraining/workouts/workouts.component';
import { CalorieTrackerComponent } from './fitonlinetraining/calorie-tracker/calorie-tracker.component';
import { RecipeSearchComponent } from './fitonlinetraining/calorie-tracker/recipe-search/recipe-search.component';
import { SidebarModule } from './layouts/sidebar/sidebar.module';
import { FooterModule } from './layouts/footer/footer.module';
import { Post1BeginnersModule } from './posts/post1-beginners/post1-beginners.module';
import { Post3ExerciseBeginnersModule } from './posts/post3-exercise-beginners/post3-exercise-beginners.module';
import { Post2SupplementsForBeginnersModule } from './posts/post2-supplements-for-beginners/post2-supplements-for-beginners.module';
import { Post4CoronainfectionsModule } from './posts/post4-coronainfections/post4-coronainfections.module';
import { Post5BalancedDietModule } from './posts/post5-balanced-diet/post5-balanced-diet.module';
import { Post6BroscienceBustedModule } from './posts/post6-broscience-busted/post6-broscience-busted.module';
import { Post7SteroidsModule } from './posts/post7-steroids/post7-steroids.module';
import { Post8FitCollegeStudentModule } from './posts/post8-fit-college-student/post8-fit-college-student.module';
import { Post9FitnessPlateausModule } from './posts/post9-fitness-plateaus/post9-fitness-plateaus.module';
import { Post10MuscleGainTimeModule } from './posts/post10-muscle-gain-time/post10-muscle-gain-time.module';
import { Post11FatLossModule } from './posts/post11-fat-loss/post11-fat-loss.module';









@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
    // PostsComponent,
    // Post1BeginnersComponent,
    // Post2SupplementsForBeginnersComponent,
    // Post3ExerciseBeginnersComponent,
    // Post4CoronainfectionsComponent,
    // Post5BalancedDietComponent,
    // Post6BroscienceBustedComponent,
    // Post7SteroidsComponent,
    // Post8FitCollegeStudentComponent,
    // Post9FitnessPlateausComponent,
    // Post10MuscleGainTimeComponent,
    // Post11FatLossComponent,
    // NewsletterComponent,
    // Newsletter2Component,
    //  FooterComponent,
    //  SidebarComponent,
    // AboutComponent,
    FitonlinetrainingComponent,
    TrainersComponent,
    WorkoutsComponent,
    CalorieTrackerComponent,
    RecipeSearchComponent,
    FitSidebarComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    CommonModule,
    TransferHttpCacheModule,
    HttpClientModule,
    NgtUniversalModule,
    NgwWowModule,
    FormsModule,
    BrowserAnimationsModule,
    OwlModule,
    FormsModule,
    // Post1BeginnersModule,
    // Post2SupplementsForBeginnersModule,
    // Post3ExerciseBeginnersModule,
    // Post4CoronainfectionsModule,
    // Post5BalancedDietModule,
    // Post6BroscienceBustedModule,
    // Post7SteroidsModule,
    // Post8FitCollegeStudentModule,
    // Post9FitnessPlateausModule,
    // Post10MuscleGainTimeModule,
    // Post11FatLossModule
     SidebarModule,
     FooterModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
